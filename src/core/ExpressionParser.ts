import {Expression} from "../expression";
import {Constant, Variable} from "../expression";
import * as Operators from "../expression/operators";
import {BracketsMissmatchException} from "../exceptions/BracketsMissmatchException";
import {TermAbstract} from "../expression/abstract/TermAbstract";
import {EmptyExpressionStringException} from "../exceptions/EmptyExpressionStringException";
import {UndefinedExpressionStringException} from "../exceptions/UndefinedExpressionStringException";
import {ParserException} from "../exceptions/ParserException";

const OperatorKeys = Object.keys(Operators);

export class ExpressionParser {
  private expressionStr: (string | undefined);

  constructor(expressionStr?: string) {
    this.expressionStr = expressionStr;
  }

  getExpressionStr() {
    return this.expressionStr;
  }

  setExpressionStr(expressionStr: string) {
    this.expressionStr = expressionStr;
  }

  parse(expressionStr?: string): Expression {
    if(expressionStr !== undefined)
      this.expressionStr = expressionStr;

    // check expression string
    if(!this.expressionStr)
      throw new UndefinedExpressionStringException();
    if(this.expressionStr == "")
      throw new EmptyExpressionStringException();

    // parse all elements from expression string
    const matches = this.expressionStr.match(/\d+|[a-z]+|[+\-*\/()^]|[&|]+/gi);

    // check number of brackets
    const leftBrackets = matches.filter(value => value=='(');
    const rightBrackets = matches.filter(value => value==')');
    if(leftBrackets.length !== rightBrackets.length)
      throw new BracketsMissmatchException();

    // create a depth array for nested expressions
    let exp = new Expression();
    const expStack = new Array<Expression>();
    expStack.push(exp);

    // iterate over all expression term elements
    matches.forEach((elem, index) => {
      const currentExp = expStack[expStack.length-1];

      // parse elem and return a TermAbstract
      const term = ExpressionParser.parseElem(elem, currentExp);
      if(!term)
        throw new ParserException("Unknown element: ["+elem+"]");

      // if term is an Expression
      if(term instanceof Expression) {
        // if expression is not the current expression, push to expression stack
        if(term !== currentExp) {
          expStack.push(term);
        // else the expression is closed, remove from stack
        } else {
          expStack.pop();
        }
      }
    });

    return exp;
  }

  private static parseElem(elem: string, currentExpression: Expression): TermAbstract {
    let term;

    // if elem matches a numerical constant [0-9]+
    let match = elem.match(/^\d+$/i);
    if(match) {
      term = new Constant(parseFloat(elem));
      currentExpression.terms.push(term);
      return term;
    }

    // if elem matches a left bracket
    match = elem.match(/^\($/i);
    if(match) {
      term = new Expression();
      currentExpression.terms.push(term);
      return term;
    }

    // if elem matches a right bracket
    match = elem.match(/^\)$/i);
    if(match) {
      return currentExpression;
    }

    // if match a named variable
    match = elem.match(/^([a-z]+|[+\-*\/^]|[&|]+)$/i);
    if(match) {

      // if elem matches an operator
      // iterate over all operators
      for(const key of OperatorKeys){
        const Operator = Operators[key];
        // iterate over all operator names
        for(const name of Operator.names) {
          // if name matches, return the constructed operator
          if(name === match[1]) {
            term = new Operators[key]();
            currentExpression.terms.push(term);
            return term;
          }
        }
      }

      // it's just a variable
      term = new Variable(match[1]);
      currentExpression.terms.push(term);
      return term;
    }
  }
}

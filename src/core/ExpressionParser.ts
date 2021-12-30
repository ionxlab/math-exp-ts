import {Expression} from "../expression";
import {Constant, Variable} from "../expression";
import * as Operators from "../expression/operators"
import {OperatorLeftRightAbstract} from "../expression/abstract/OperatorLeftRightAbstract";
import {OperatorFunctionAbstract} from "../expression/abstract/OperatorFunctionAbstract";
import {BracketsMissmatchException} from "../exceptions/BracketsMissmatchException";
import {TermAbstract} from "../expression/abstract/TermAbstract";

const OperatorKeys = Object.keys(Operators);

export class ExpressionParser {
  private expressionStr: (string | undefined);

  constructor(expressionStr?: string) {
    this.expressionStr = expressionStr;
  }

  setExpressionStr(value: string | undefined) {
    this.expressionStr = value;
  }

  parse(): Expression {
    if(!this.expressionStr)
      throw new Error("Expression is undefined.");

    // parse all elements from expression string
    const matches = this.expressionStr.match(/[a-z0-9]+|[+\-*\/()^|&]/gi);

    // check number of brackets
    const leftBrackets = matches.filter(value => value=='(');
    const rightBrackets = matches.filter(value => value==')');
    if(leftBrackets.length !== rightBrackets.length)
      throw new BracketsMissmatchException();


    let exp = new Expression();
    const expTree = new Array<Expression>();
    expTree.push(exp);

    // iterate over all expression term elements
    matches.forEach((elem, index) => {
      const lastExp = expTree[expTree.length-1];
      const term = this.parseTerm(elem, lastExp);
      if(term instanceof Expression) {
        if(term !== lastExp) {
          lastExp.terms.push(term);
          expTree.push(term);
        } else {
          expTree.pop();
        }
      } else {
        lastExp.terms.push(term);
      }
    });

    return exp;
  }

  private parseTerm(elem: string, currentExpression: Expression): TermAbstract {

    // if match numerical constant [0-9]+
    let match = elem.match(/^[0-9]+$/i);
    if(match) {
      return new Constant(parseFloat(elem));
    }

    // if match a left bracket
    match = elem.match(/^\($/i);
    if(match) {
      return new Expression();
    }

    // if match a right bracket
    match = elem.match(/^\)$/i);
    if(match) {
      return currentExpression;
    }

    // if match an operator
    // iterate over all operators
    for(const key of OperatorKeys){
      const Operator = Operators[key];
      // iterate over all operator names
      for(const name of Operator.names) {
        // if name is same as term element, create and push operator to expression
        if(name === elem) {
          if(Operator.prototype instanceof OperatorLeftRightAbstract) {
            return new Operators[key]();
          } else if(Operator.prototype instanceof OperatorFunctionAbstract) {
            return new Operators[key]();
          }
        }
      }
    }

    // if match a named variable with a coefficient
    match = elem.match(/^([0-9]*)([a-z]+)$/i);
    if(match) {
      return new Variable(match[1], parseFloat(match[2]));
    }
  }
}

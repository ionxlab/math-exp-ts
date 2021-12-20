import {OperatorAbstract} from "./abstract/OperatorAbstract";
import {OperandAbstract} from "./abstract/OperandAbstract";
import {TermAbstract} from "./abstract/TermAbstract";
import {OperatorLeftRightAbstract} from "./abstract/OperatorLeftRightAbstract";
import {OperatorFunctionAbstract} from "./abstract/OperatorFunctionAbstract";
import {Constant} from "./operands";
import {MissingTermException} from "../exceptions/MissingTermException";
import {MissingOperandException} from "../exceptions/MissingOperandException";
import {EmptyExpressionException} from "../exceptions/EmptyExpressionException";

export class Expression extends TermAbstract {
  public static debug = true;
  readonly precedence: number = 19;

  terms: Array<TermAbstract> = new Array<TermAbstract>();
  private brackets: boolean = true;

  constructor(...terms: TermAbstract[]) {
    super();
    if(terms !== undefined)
      this.terms = this.terms.concat(terms);
  }

  push(term: TermAbstract): Expression {
    this.terms.push(term);
    return this;
  }

  pop(): TermAbstract {
    return this.terms.pop();
  }

  shift(): TermAbstract {
    return this.terms.shift();
  }

  unshift(term: TermAbstract): Expression {
    this.terms.unshift(term);
    return this;
  }

  setBrackets(active: boolean) {
    this.brackets = active;
  }

  evaluate(): number {

    if(this.terms.length==0)
      throw new EmptyExpressionException();

    Expression.Log("Evaluating:", this.toString());

    let temp = this.clone();

    while(temp.terms.length>1 || !(temp.terms[0] instanceof OperandAbstract)) {

      let highest = -1;
      let highestId = -1;
      temp.terms.forEach((t, id) => {
        if(t.precedence>highest) {
          highest = t.precedence;
          highestId = id;
        }
      });
      temp = Expression.evaluateTerm(temp, highestId);
      Expression.Log("Temporary expression:", temp.toString());
    }

    return (temp.terms[0] as OperandAbstract).evaluate();
  }

  private static evaluateTerm(expression: Expression, index: number): Expression {

    let temp = expression.clone();

    const term = temp.terms[index];
    Expression.Log("Evaluating Term:", term.toString());

    let value = 0;
    if(!term) {
      throw new MissingTermException("Term at '"+index+"' is missing.");
    } else if(term instanceof Expression) {
      Expression.Log("Term is an 'Expression'");
      value = term.evaluate();
      temp.terms[index] = new Constant(value);
    } else if(term instanceof OperatorAbstract) {
      if(term instanceof OperatorLeftRightAbstract) {
        Expression.Log("Term is an 'OperatorLeftRight'");
        const left = temp.terms[index-1];
        const right = temp.terms[index+1];

        if(!(left instanceof OperandAbstract))
          throw new MissingOperandException("Left argument of operator '"+term.toString()+"' is invalid.");
        if(!(right instanceof OperandAbstract))
          throw new MissingOperandException("Right argument of operator '"+term.toString()+"' is invalid.");

        value = term.evaluate((left as OperandAbstract).evaluate(), (right as OperandAbstract).evaluate());

        Expression.Log("Evaluated Value: ", value);

        temp.terms[index] = new Constant(value);
        temp.terms.splice(index+1, 1);
        temp.terms.splice(index-1, 1);
      } else if(term instanceof OperatorFunctionAbstract) {
        Expression.Log("Term is an 'OperatorFunction'");
        value = term.evaluate();
        temp.terms[index] = new Constant(value);
      }
    } else if(term instanceof OperandAbstract) {
      Expression.Log("Term is an 'Operand'");
      value = term.evaluate();
      temp.terms[index] = new Constant(value);
    }

    return temp;
  }

  private static Log(...args: Object[]) {
    if(Expression.debug)
      console.log.apply(console, args);
  }

  clone(): Expression {
    let clone = new Expression();
    clone.brackets = this.brackets;
    clone.terms = clone.terms.concat(this.terms);
    return clone;
  }

  toString(): string {
    let str = "";
    this.terms.forEach((t, id) => {
      str += t.toString();
    });
    if(this.brackets)
      str = "("+str+")";
    return str;
  }
}
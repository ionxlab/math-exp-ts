import {OperatorAbstract} from "../abstract/OperatorAbstract";
import {OperandAbstract} from "../abstract/OperandAbstract";
import {TermAbstract} from "../abstract/TermAbstract";
import {OperatorLeftRightAbstract} from "../abstract/OperatorLeftRightAbstract";
import {OperatorFunctionAbstract} from "../abstract/OperatorFunctionAbstract";
import {Constant, Variable} from "../operands";
import {MissingTermException} from "../../exceptions/MissingTermException";
import {MissingOperandException} from "../../exceptions/MissingOperandException";
import {EmptyExpressionException} from "../../exceptions/EmptyExpressionException";

export class Expression extends TermAbstract {
  public static debug = true;
  readonly precedence: number = 19;

  private _brackets: boolean = true;
  private _terms: Array<TermAbstract> = new Array<TermAbstract>();

  constructor(...terms: TermAbstract[]) {
    super();
    if(terms !== undefined)
      this._terms = this._terms.concat(terms);
  }

  get terms(): Array<TermAbstract> {
    return this._terms;
  }

  set terms(value: Array<TermAbstract>) {
    this._terms = value;
  }

  get brackets() {
    return this._brackets;
  }

  set brackets(active: boolean) {
    this._brackets = active;
  }

  evaluate(): number {

    // check terms
    if(this._terms.length==0)
      throw new EmptyExpressionException();

    Expression.Log("Evaluating:", this.toString());

    // make a clone for editing
    let temp = this.clone();

    // loop until one constant is left
    while(temp._terms.length>1 || !(temp._terms[0] instanceof Constant)) {

      let highest = -1;
      let highestId = -1;
      // iterate over all terms and evaluate highest precedence
      temp._terms.forEach((t, id) => {
        if(t.precedence>highest) {
          highest = t.precedence;
          highestId = id;
        }
      });
      Expression.evaluateTerm(temp, highestId);
      Expression.Log("Temporary expression:", temp.toString());
    }

    return (temp._terms[0] as OperandAbstract).evaluate();
  }

  private static evaluateTerm(expression: Expression, index: number): Expression {

    const term = expression._terms[index];
    Expression.Log("Evaluating Term:", term.toString());

    let value = 0;
    if(!term)
      throw new MissingTermException("Term at '"+index+"' is missing.");

    if(term instanceof Expression) {
      Expression.Log("Term is an 'Expression'");
      value = term.evaluate();
      expression._terms[index] = new Constant(value, true);

    } else if(term instanceof OperandAbstract) {
      if(term instanceof Constant)
        Expression.Log("Term is a 'Constant'");
      if(term instanceof Variable)
        Expression.Log("Term is a 'Variable'");

      value = term.evaluate();
      expression._terms[index] = new Constant(value, term.brackets);

    } else if(term instanceof OperatorAbstract) {

      if(term instanceof OperatorLeftRightAbstract) {
        Expression.Log("Term is an 'OperatorLeftRight'");
        const left = expression._terms[index-1];
        const right = expression._terms[index+1];

        if(!(left instanceof Constant))
          throw new MissingOperandException("Operator '"+term.toString()+"' left argument '"+left.toString()+"' is invalid.");
        if(!(right instanceof Constant))
          throw new MissingOperandException("Operator '"+term.toString()+"' right argument '"+right.toString()+"' is invalid.");

        value = term.evaluate(left, right);

        Expression.Log("Evaluated Value: ", value);

        expression._terms[index] = new Constant(value);
        expression._terms.splice(index+1, 1);
        expression._terms.splice(index-1, 1);

      } else if(term instanceof OperatorFunctionAbstract) {
        Expression.Log("Term is an 'OperatorFunction'");
        const param = expression._terms[index+1];

        if(!(param instanceof Constant))
          throw new MissingOperandException("Operator '"+term.toString()+"' argument '"+param.toString()+"' is invalid.");

        value = term.evaluate(param);
        expression._terms[index] = new Constant(value);
        expression._terms.splice(index+1, 1);
      } else {
        Expression.Log("Unknown operator term ?");
      }
    } else {
      Expression.Log("Unknown term ?");
    }

    return expression;
  }

  private static Log(...args: Object[]) {
    if(Expression.debug)
      console.log.apply(console, args);
  }

  clone(): Expression {
    let clone = new Expression();
    clone.brackets = this.brackets;
    clone._terms = clone._terms.concat(this._terms);
    return clone;
  }

  toString(): string {
    let str = "";
    this._terms.forEach((t, id) => {
      str += t.toString();
    });
    if(this.brackets)
      str = "("+str+")";
    return str;
  }
}
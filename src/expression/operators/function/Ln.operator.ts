import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../core";
import {TermAbstract} from "../../abstract/TermAbstract";

export class LnOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("ln");

  constructor(...terms: TermAbstract[]) {
    super((terms && terms[0] instanceof Expression ? terms[0] : new Expression(...terms)));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log(result);
  }
}
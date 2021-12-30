import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../core";
import {TermAbstract} from "../../abstract/TermAbstract";

export class SinOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("sin");

  constructor(...terms: TermAbstract[]) {
    super(new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sin(result);
  }
}
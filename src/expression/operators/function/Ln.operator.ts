import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class LnOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("ln");
  readonly names: Array<string> = LnOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.log(result);
  }
}
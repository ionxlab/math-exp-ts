import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class TanOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("tan");
  readonly names: Array<string> = TanOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.tan(result);
  }
}
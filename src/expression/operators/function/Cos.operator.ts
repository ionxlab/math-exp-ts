import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class CosOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("cos");
  readonly names: Array<string> = CosOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.cos(result);
  }
}
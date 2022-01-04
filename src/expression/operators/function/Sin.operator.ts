import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class SinOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("sin");
  readonly names: Array<string> = SinOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.sin(result);
  }
}
import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class LogOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("log");
  readonly names: Array<string> = LogOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.log10(result);
  }
}
import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Constant} from "../../operands";

export class SquareRootOperator extends OperatorFunctionAbstract {

  static readonly names: Array<string> = new Array<string>("sqrt", "√");
  readonly names: Array<string> = SquareRootOperator.names;

  evaluate(param: Constant): number {
    const result = param.evaluate();
    return Math.sqrt(result);
  }
}
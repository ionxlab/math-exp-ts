import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class ExponentOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("^");
  readonly names: Array<string> = ExponentOperator.names;
  readonly precedence: number = 14;

  evaluate(left: Constant, right: Constant): number {
    return Math.pow(left.value, right.value);
  }
}
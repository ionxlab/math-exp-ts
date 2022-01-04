import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class AndOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("&");
  readonly names: Array<string> = AndOperator.names;
  readonly precedence: number = 8;

  evaluate(left: Constant, right: Constant): number {
    return left.value & right.value;
  }
}
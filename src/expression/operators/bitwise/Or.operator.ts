import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class OrOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("|");
  readonly names: Array<string> = OrOperator.names;
  readonly precedence: number = 6;

  evaluate(left: Constant, right: Constant): number {
    return left.value | right.value;
  }
}
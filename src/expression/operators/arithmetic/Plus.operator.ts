import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class PlusOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("+");
  readonly names: Array<string> = PlusOperator.names;
  readonly precedence: number = 12;

  evaluate(left: Constant, right: Constant): number {
    return left.value+right.value;
  }
}
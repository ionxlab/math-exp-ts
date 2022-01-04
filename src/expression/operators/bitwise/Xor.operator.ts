import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class XorOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("||");
  readonly names: Array<string> = XorOperator.names;
  readonly precedence: number = 7;

  evaluate(left: Constant, right: Constant): number {
    return left.value ^ right.value;
  }
}
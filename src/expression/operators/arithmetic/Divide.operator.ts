import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {DivisionByZeroException} from "../../../exceptions/DivisionByZeroException";
import {Constant} from "../../operands";

export class DivideOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("/");
  readonly names: Array<string> = DivideOperator.names;
  readonly precedence: number = 13;

  evaluate(left: Constant, right: Constant): number {
    if(right.value == 0)
      throw new DivisionByZeroException();

    return left.value/right.value;
  }
}
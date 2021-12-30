import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {DivisionByZeroException} from "../../../exceptions/DivisionByZeroException";

export class DivideOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("/");
  readonly precedence: number = 13;

  evaluate(left:number, right:number): number {
    if(right == 0)
      throw new DivisionByZeroException();

    return left/right;
  }
}
import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {DivisionByZeroException} from "../../../exceptions/DivisionByZeroException";

export class DivideOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 13;

  constructor() {
    super("Divide", "/")
  }

  evaluate(left:number, right:number): number {
    if(right == 0)
      throw new DivisionByZeroException();

    return left/right;
  }
}
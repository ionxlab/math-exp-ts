import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class MinusOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 12;

  constructor() {
    super("Minus", "-")
  }

  evaluate(left:number, right:number): number {
    return left-right;
  }
}
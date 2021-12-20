import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class MultiplyOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 13;

  constructor() {
    super("Multiply", "*")
  }

  evaluate(left:number, right:number): number {
    return left*right;
  }
}
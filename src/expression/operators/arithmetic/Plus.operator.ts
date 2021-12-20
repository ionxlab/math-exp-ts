import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class PlusOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 12;

  constructor() {
    super("Plus", "+")
  }

  evaluate(left:number, right:number): number {
    return left+right;
  }
}
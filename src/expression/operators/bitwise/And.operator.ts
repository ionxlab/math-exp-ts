import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class AndOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 8;

  evaluate(left: number, right: number): number {
    return left & right;
  }
}
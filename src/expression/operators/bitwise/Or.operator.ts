import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class OrOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 6;

  evaluate(left: number, right: number): number {
    return left | right;
  }
}
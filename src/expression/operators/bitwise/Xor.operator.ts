import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class XorOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 7;

  evaluate(left: number, right: number): number {
    return left ^  right;
  }
}
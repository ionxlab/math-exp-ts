import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class ExponentOperator extends OperatorLeftRightAbstract {

  readonly precedence: number = 14;

  constructor() {
    super("Exponent", "^")
  }

  evaluate(left:number, right:number): number {
    return Math.pow(left, right);
  }
}
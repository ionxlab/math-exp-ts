import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";

export class ExponentOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 14;

  constructor() {
    super("Exponent", "^")
  }

  evaluate(): number {
    return Math.pow(this.before, this.after);
  }
}
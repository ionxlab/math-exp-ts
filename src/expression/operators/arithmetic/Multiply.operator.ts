import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";

export class MultiplyOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 13;

  constructor() {
    super("Multiply", "*")
  }

  evaluate(): number {
    return this.before*this.after;
  }
}
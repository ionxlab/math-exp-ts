import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";

export class MinusOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 12;

  constructor() {
    super("Minus", "-")
  }

  evaluate(): number {
    return this.before-this.after;
  }
}
import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";

export class PlusOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 12;

  constructor() {
    super("Plus", "+")
  }

  evaluate(): number {
    return this.before+this.after;
  }
}
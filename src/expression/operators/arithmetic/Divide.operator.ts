import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";

export class DivideOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 13;

  constructor() {
    super("Divide", "/")
  }

  evaluate(): number {
    return this.before/this.after;
  }
}
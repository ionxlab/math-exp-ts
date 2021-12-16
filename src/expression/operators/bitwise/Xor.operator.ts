import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";


export class XorOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 7;

  evaluate(before: number, after: number): number {
    return this.before ^ this.after;
  }
}
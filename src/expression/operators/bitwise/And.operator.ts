import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";


export class AndOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 8;

  evaluate(before: number, after: number): number {
    return this.before & this.after;
  }
}
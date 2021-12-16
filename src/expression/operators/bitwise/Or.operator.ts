import {OperatorBeforeAfterAbstract} from "../../abstract/OperatorBeforeAfterAbstract";


export class OrOperator extends OperatorBeforeAfterAbstract {

  readonly precedence: number = 6;

  evaluate(before: number, after: number): number {
    return this.before | this.after;
  }
}
import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class ExponentOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("^");
  readonly precedence: number = 14;

  evaluate(left:number, right:number): number {
    return Math.pow(left, right);
  }
}
import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class MinusOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("-");
  readonly precedence: number = 12;

  evaluate(left:number, right:number): number {
    return left-right;
  }
}
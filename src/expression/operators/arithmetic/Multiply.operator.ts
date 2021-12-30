import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";

export class MultiplyOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("*");
  readonly precedence: number = 13;

  evaluate(left:number, right:number): number {
    return left*right;
  }
}
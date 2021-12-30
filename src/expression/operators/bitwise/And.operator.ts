import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class AndOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("&");
  readonly precedence: number = 8;

  evaluate(left: number, right: number): number {
    return left & right;
  }
}
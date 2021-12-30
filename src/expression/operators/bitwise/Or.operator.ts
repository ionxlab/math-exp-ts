import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class OrOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("|");
  readonly precedence: number = 6;

  evaluate(left: number, right: number): number {
    return left | right;
  }
}
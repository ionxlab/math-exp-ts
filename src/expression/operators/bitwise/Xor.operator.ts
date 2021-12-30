import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";


export class XorOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("|^");
  readonly precedence: number = 7;

  evaluate(left: number, right: number): number {
    return left ^ right;
  }
}
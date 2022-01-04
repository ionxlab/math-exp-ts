import {OperatorLeftRightAbstract} from "../../abstract/OperatorLeftRightAbstract";
import {Constant} from "../../operands";

export class MultiplyOperator extends OperatorLeftRightAbstract {

  static readonly names: Array<string> = new Array<string>("*");
  readonly names: Array<string> = MultiplyOperator.names;
  readonly precedence: number = 13;
  hidden: boolean = false;

  constructor(hidden?: boolean) {
    super();
    this.hidden = hidden;
  }

  evaluate(left: Constant, right: Constant): number {
    return left.value*right.value;
  }

  toString(nameId?: number): string {
    if(!this.hidden)
      return super.toString(nameId);
    return "";
  }
}
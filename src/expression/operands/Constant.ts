import {OperandAbstract} from "../abstract/OperandAbstract";


export class Constant extends OperandAbstract {

  value: number;

  constructor(value: number, brackets?: boolean) {
    super(brackets);
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }

  toString(): string {
    let str = this.value.toString();
    if(this.brackets)
      str = "("+str+")";
    return str;
  }
}
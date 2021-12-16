import {OperandAbstract} from "../abstract/OperandAbstract";


export class Constant extends OperandAbstract {

  value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
import {OperandAbstract} from "./OperandAbstract";


export class Constant extends OperandAbstract {
  value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }
}
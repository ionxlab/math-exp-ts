import {OperandAbstract} from "../abstract/OperandAbstract";


export class Variable extends OperandAbstract {
  private coefficient: number = 0;
  private letter: string;
  private value: number = 0;

  constructor(letter: string, coefficient?: number, value?: number) {
    super();
    this.letter = letter;
    if(coefficient !== undefined)
      this.coefficient = coefficient;
    if(value !== undefined)
      this.value = value;
  }

  evaluate(): number {
    return (this.coefficient*this.value);
  }

  toString(): string {
    return this.coefficient.toString()+this.letter;
  }
}
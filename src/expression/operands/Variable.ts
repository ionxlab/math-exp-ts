import {OperandAbstract} from "../abstract/OperandAbstract";
import {VariableMap} from "../utils/VariableMap";

export class Variable extends OperandAbstract {
  private coefficient: number = 0;
  private letter: string;
  private static _values = new VariableMap();

  constructor(letter: string, coefficient?: number, value?: number) {
    super();
    this.letter = letter;
    if(coefficient !== undefined)
      this.coefficient = coefficient;
    if(value !== undefined)
      Variable._values.set(this.letter, value);
  }

  static get values(): VariableMap {
    return Variable._values;
  }

  evaluate(): number {
    let val = Variable._values.get(this.letter);
    if(val == undefined)
      val = 0;
    return (this.coefficient*val);
  }

  toString(): string {
    return this.coefficient.toString()+this.letter;
  }
}

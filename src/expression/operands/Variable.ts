import {OperandAbstract} from "../abstract/OperandAbstract";
import {VariableMap} from "../core";


export class Variable extends OperandAbstract {
  private coefficient: number = 0;
  private identifier: string;
  private static _values = new VariableMap();

  constructor(identifier: string, coefficient?: number, value?: number) {
    super();
    this.identifier = identifier;
    if(coefficient !== undefined)
      this.coefficient = coefficient;
    if(value !== undefined)
      Variable._values.set(this.identifier, value);
  }

  static get values(): VariableMap {
    return Variable._values;
  }

  evaluate(): number {
    let val = Variable._values.get(this.identifier);
    if(val == undefined)
      val = 0;
    return (this.coefficient*val);
  }

  toString(): string {
    return this.coefficient.toString()+this.identifier;
  }
}

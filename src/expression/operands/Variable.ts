import {OperandAbstract} from "../abstract/OperandAbstract";
import {Variables} from "../core";


export class Variable extends OperandAbstract {
  private identifier: string
  readonly precedence: number = 20;

  constructor(identifier: string, brackets?: boolean, value?: number) {
    super(brackets);
    this.identifier = identifier;
    if(value !== undefined)
      Variables.map.set(this.identifier, value);
  }

  evaluate(): number {
    let val = Variables.map.get(this.identifier);
    if(val == undefined)
      val = 0;
    return val;
  }

  toString(): string {
    let str = this.identifier.toString();
    if(this.brackets)
      str = "("+str+")";
    return str;
  }
}

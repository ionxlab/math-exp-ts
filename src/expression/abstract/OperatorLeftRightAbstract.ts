import {OperatorAbstract} from "./OperatorAbstract";

export abstract class OperatorLeftRightAbstract extends OperatorAbstract {
  name: string;
  symbol: string;

  protected constructor(name: string, symbol: string) {
    super(name, symbol);
    this.name = name;
    this.symbol = symbol;
  }

  abstract evaluate(left: number, right: number): number ;

  toString(): string {
    return this.symbol;
  };
}
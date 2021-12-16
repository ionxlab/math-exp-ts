import {OperatorAbstract} from "./OperatorAbstract";
import {TermAbstract} from "./TermAbstract";


export abstract class OperatorBeforeAfterAbstract extends OperatorAbstract {
  name: string;
  symbol: string;
  before: number;
  after: number;

  protected constructor(name: string, symbol: string) {
    super(name, symbol);
    this.name = name;
    this.symbol = symbol;
  }

  abstract evaluate(before: number, after: number): number ;

  toString(): string {
    return this.symbol;
  };
}
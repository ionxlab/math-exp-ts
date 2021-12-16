import {TermAbstract} from "./TermAbstract";


export abstract class OperatorAbstract extends TermAbstract {
  name: string;
  symbol: string;

  protected constructor(name: string, symbol: string) {
    super();
    this.name = name;
    this.symbol = symbol;
  }
}
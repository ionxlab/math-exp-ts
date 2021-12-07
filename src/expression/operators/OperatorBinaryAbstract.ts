import {OperatorAbstract} from "./OperatorAbstract";


export abstract class OperatorBinaryAbstract extends OperatorAbstract {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    super(name, symbol);
    this.name = name;
    this.symbol = symbol;
  }

  abstract evaluate(): number;
}
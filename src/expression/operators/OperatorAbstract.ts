

export abstract class OperatorAbstract {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }

  abstract toString(): string;
}
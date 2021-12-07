import {OperatorAbstract} from "./OperatorAbstract";
import {Expression} from "../Expression";


export abstract class OperatorExpressionAbstract extends OperatorAbstract {
  name: string;
  symbol: string;
  expression: Expression;

  constructor(name: string, symbol: string, expression: Expression) {
    super(name, symbol);
    this.expression = expression;
  }

  abstract evaluate(): number;

  toString(): string {
    return this.symbol+'('+this.expression.toString()+')';
  };
}
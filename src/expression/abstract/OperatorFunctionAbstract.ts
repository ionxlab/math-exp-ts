import {OperatorAbstract} from "./OperatorAbstract";
import {Expression} from "../Expression";


export abstract class OperatorFunctionAbstract extends OperatorAbstract {
  name: string;
  symbol: string;
  expression: Expression;

  readonly precedence: number = 18;

  protected constructor(name: string, symbol: string, expression?: Expression) {
    super(name, symbol);
    this.expression = expression;
  }

  abstract evaluate(): number ;

  toString(): string {
    return this.symbol+'('+this.expression.toString()+')';
  };
}
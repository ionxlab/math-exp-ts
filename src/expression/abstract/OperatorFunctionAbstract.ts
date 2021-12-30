import {OperatorAbstract} from "./OperatorAbstract";
import {Expression} from "../core/Expression";
import {OperandAbstract} from "./OperandAbstract";

export abstract class OperatorFunctionAbstract extends OperatorAbstract {

  readonly precedence: number = 18;
  private _expression: Expression;

  protected constructor(expression?: Expression) {
    super();
    this._expression = expression;
  }

  get expression(): Expression {
    return this._expression;
  }

  abstract evaluate(): number ;

  toString(nameId?:number): string {
    let id = 0;
    if(nameId !== undefined && nameId >= 0 && nameId < OperatorAbstract.names.length)
      id = 0;
    return OperatorAbstract.names[id]+this._expression.toString();
  };
}
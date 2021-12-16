import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../Expression";

export class SinOperator extends OperatorFunctionAbstract {

  constructor(expression: Expression) {
    super("Sin", "sin", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sin(result);
  }
}
import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class SinOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Sin", "sin", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sin(result);
  }
}
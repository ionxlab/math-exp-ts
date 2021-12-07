import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class LogOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Log", "Log", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log10(result);
  }
}
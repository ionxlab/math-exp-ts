import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class TanOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Tan", "tan", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.tan(result);
  }
}
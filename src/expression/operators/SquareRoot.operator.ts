import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class SquareRootOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Sqrt", "√", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sqrt(result);
  }
}
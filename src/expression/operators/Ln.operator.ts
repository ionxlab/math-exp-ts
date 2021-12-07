import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class LnOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Ln", "Ln", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log(result);
  }
}
import {OperatorExpressionAbstract} from "./OperatorExpressionAbstract";
import {Expression} from "../Expression";

export class CosOperator extends OperatorExpressionAbstract {

  constructor(expression: Expression) {
    super("Cos", "cos", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.cos(result);
  }
}
import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";

export class SquareRootOperator extends OperatorFunctionAbstract {

  constructor(expression: Expression) {
    super("Sqrt", "√", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sqrt(result);
  }
}
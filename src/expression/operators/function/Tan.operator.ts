import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";

export class TanOperator extends OperatorFunctionAbstract {

  constructor(expression: Expression) {
    super("Tan", "tan", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.tan(result);
  }
}
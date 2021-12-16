import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";

export class LnOperator extends OperatorFunctionAbstract {

  constructor(expression: Expression) {
    super("Ln", "Ln", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log(result);
  }
}
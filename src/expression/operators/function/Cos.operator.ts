import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";

export class CosOperator extends OperatorFunctionAbstract {

  constructor(expression?: Expression) {
    super("Cos", "cos", expression);
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.cos(result);
  }
}
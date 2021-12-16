import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../Expression";

export class LogOperator extends OperatorFunctionAbstract {

  constructor(expression: Expression) {
    super("Log", "Log", expression)
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log10(result);
  }
}
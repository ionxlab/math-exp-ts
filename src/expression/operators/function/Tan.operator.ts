import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class TanOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Tan", "tan", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.tan(result);
  }
}
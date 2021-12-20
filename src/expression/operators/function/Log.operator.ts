import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class LogOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Log", "Log", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log10(result);
  }
}
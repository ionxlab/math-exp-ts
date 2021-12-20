import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class LnOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Ln", "Ln", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.log(result);
  }
}
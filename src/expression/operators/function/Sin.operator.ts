import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class SinOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Sin", "sin", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sin(result);
  }
}
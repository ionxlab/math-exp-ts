import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class CosOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Cos", "cos", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.cos(result);
  }
}
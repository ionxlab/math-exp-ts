import {OperatorFunctionAbstract} from "../../abstract/OperatorFunctionAbstract";
import {Expression} from "../../Expression";
import {TermAbstract} from "../../abstract/TermAbstract";

export class SquareRootOperator extends OperatorFunctionAbstract {

  constructor(...terms: TermAbstract[]) {
    super("Sqrt", "√", new Expression(...terms));
  }

  evaluate(): number {
    const result = this.expression.evaluate();
    return Math.sqrt(result);
  }
}
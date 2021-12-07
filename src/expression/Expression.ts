import {OperatorAbstract} from "./operators/OperatorAbstract";
import {OperandAbstract} from "./operands/OperandAbstract";
import {Sin} from "./operators";
import {Constant} from "./operands/Constant";
import {Variable} from "./operands/Variable";


export class Expression {

  private terms: Array<OperandAbstract | OperatorAbstract> = new Array<OperandAbstract | OperatorAbstract>();

  constructor(terms: Array<OperandAbstract | OperatorAbstract>) {
    this.terms.concat(terms);
  }

  evaluate(): number {
    let result = 0;
    let lastTerm: (OperandAbstract | OperatorAbstract | undefined);
    this.terms.forEach((t, id) => {
      if(t instanceof OperandAbstract && id == 0) {
        result = t.evaluate();
      } else if(t instanceof OperatorAbstract) {
        t.evaluate();
      }
      if(id > 0) {
      }
      lastTerm = t;

    });
    return result;
  }
}
import {OperatorBinaryAbstract} from "./OperatorBinaryAbstract";

export class ExponentOperator extends OperatorBinaryAbstract {

  constructor() {
    super("Exponent", "^")
  }

  evaluate(param1:number, param2:number): number {
    return Math.pow(param1, param2);
  }
}
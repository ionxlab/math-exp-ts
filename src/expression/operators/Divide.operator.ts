import {OperatorBinaryAbstract} from "./OperatorBinaryAbstract";

export class DivideOperator extends OperatorBinaryAbstract {

  constructor() {
    super("Divide", "/")
  }

  evaluate(param1:number, param2:number): number {
    return param1/param2;
  }
}
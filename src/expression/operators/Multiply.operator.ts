import {OperatorBinaryAbstract} from "./OperatorBinaryAbstract";

export class MultiplyOperator extends OperatorBinaryAbstract {

  constructor() {
    super("Multiply", "*")
  }

  evaluate(param1:number, param2:number): number {
    return param1*param2;
  }
}
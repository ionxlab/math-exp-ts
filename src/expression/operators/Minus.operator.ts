import {OperatorBinaryAbstract} from "./OperatorBinaryAbstract";

export class MinusOperator extends OperatorBinaryAbstract {

  constructor() {
    super("Minus", "-")
  }

  evaluate(param1:number, param2:number): number {
    return param1+param2;
  }
}
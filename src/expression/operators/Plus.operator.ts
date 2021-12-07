import {OperatorBinaryAbstract} from "./OperatorBinaryAbstract";

export class PlusOperator extends OperatorBinaryAbstract {

  constructor() {
    super("Plus", "+")
  }

  evaluate(param1:number, param2:number): number {
    return param1+param2;
  }
}
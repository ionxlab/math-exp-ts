import {OperatorAbstract} from "./OperatorAbstract";

export class Cos extends OperatorAbstract {

  constructor() {
    super("Cos", "cos")
  }

  evaluate(): number {
    return 0;
  }

}
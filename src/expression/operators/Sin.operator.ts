import {OperatorAbstract} from "./OperatorAbstract";

export class Sin extends OperatorAbstract {

  constructor() {
    super("Sin", "sin")
  }

  evaluate(): number {
    return 0;
  }

}
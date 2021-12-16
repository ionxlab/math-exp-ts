import {TermAbstract} from "./TermAbstract";


export abstract class OperandAbstract extends TermAbstract {

  readonly precedence: number = 0;
  abstract evaluate(): number ;
}
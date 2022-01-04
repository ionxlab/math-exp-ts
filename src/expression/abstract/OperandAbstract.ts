import {TermAbstract} from "./TermAbstract";


export abstract class OperandAbstract extends TermAbstract {

  readonly precedence: number = 0;
  protected _brackets: boolean = false;

  constructor(brackets?: boolean) {
    super();
    if(brackets !== undefined)
      this._brackets = brackets;
  }

  get brackets() {
    return this._brackets;
  }

  set brackets(active: boolean) {
    this._brackets = active;
  }

  abstract evaluate(): number ;
}
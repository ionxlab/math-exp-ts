import {TermAbstract} from "./TermAbstract";


export abstract class OperatorAbstract extends TermAbstract {

  abstract readonly names: Array<string>;

  toString(nameId?:number): string {
    let id = 0;
    if(nameId !== undefined && nameId >= 0 && nameId < this.names.length)
      id = 0;
    return this.names[id];
  };
}
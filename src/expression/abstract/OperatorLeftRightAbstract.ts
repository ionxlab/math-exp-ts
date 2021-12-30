import {OperatorAbstract} from "./OperatorAbstract";

export abstract class OperatorLeftRightAbstract extends OperatorAbstract {

  abstract evaluate(left: number, right: number): number ;

  toString(nameId?:number): string {
    let id = 0;
    if(nameId !== undefined && nameId >= 0 && nameId < OperatorAbstract.names.length)
      id = nameId;
    return OperatorAbstract.names[id];
  };
}
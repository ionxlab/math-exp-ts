import {OperatorAbstract} from "./OperatorAbstract";
import {Constant} from "../operands";

export abstract class OperatorFunctionAbstract extends OperatorAbstract {

  readonly precedence: number = 18;

  abstract evaluate(param: Constant): number ;
}
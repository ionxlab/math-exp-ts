import {OperatorAbstract} from "./OperatorAbstract";
import {Constant} from "../operands";

export abstract class OperatorLeftRightAbstract extends OperatorAbstract {

  abstract evaluate(left: Constant, right: Constant): number ;
}
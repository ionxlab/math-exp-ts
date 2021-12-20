import {EvaluateException} from "./EvaluateException";

export class DivisionByZeroException extends EvaluateException {

  constructor(message?: string) {
    super(message);
  }
}
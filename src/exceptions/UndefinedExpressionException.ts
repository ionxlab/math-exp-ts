import {EvaluateException} from "./EvaluateException";

export class UndefinedExpressionException extends EvaluateException {

  constructor(message?: string) {
    super(message);
  }
}
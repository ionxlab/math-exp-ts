import {EvaluateException} from "./EvaluateException";

export class EmptyExpressionException extends EvaluateException {

  constructor(message?: string) {
    super(message);
  }
}
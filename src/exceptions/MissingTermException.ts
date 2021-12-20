import {EvaluateException} from "./EvaluateException";

export class MissingTermException extends EvaluateException {

  constructor(message?: string) {
    super(message);
  }
}
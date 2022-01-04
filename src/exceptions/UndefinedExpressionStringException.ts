import {ParserException} from "./ParserException";

export class UndefinedExpressionStringException extends ParserException {

  constructor(message?: string) {
    super(message);
  }
}
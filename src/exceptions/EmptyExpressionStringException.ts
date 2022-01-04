import {ParserException} from "./ParserException";

export class EmptyExpressionStringException extends ParserException {

  constructor(message?: string) {
    super(message);
  }
}
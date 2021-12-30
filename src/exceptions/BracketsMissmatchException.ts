import {ParserException} from "./ParserException";

export class BracketsMissmatchException extends ParserException {

  constructor(message?: string) {
    super(message);
  }
}
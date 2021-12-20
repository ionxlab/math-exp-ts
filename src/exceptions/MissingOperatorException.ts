import {MissingTermException} from "./MissingTermException";

export class MissingOperatorException extends MissingTermException {

  constructor(message?: string) {
    super(message);
  }
}
import {MissingTermException} from "./MissingTermException";

export class MissingOperandException extends MissingTermException {

  constructor(message?: string) {
    super(message);
  }
}
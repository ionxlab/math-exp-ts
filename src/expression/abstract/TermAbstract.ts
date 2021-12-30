

export abstract class TermAbstract {

  abstract readonly precedence: number;
  abstract toString(nameId?: number): string;
}
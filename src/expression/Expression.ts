import {OperatorAbstract} from "./abstract/OperatorAbstract";
import {OperandAbstract} from "./abstract/OperandAbstract";
import {TermAbstract} from "./abstract/TermAbstract";
import {OperatorBeforeAfterAbstract} from "./abstract/OperatorBeforeAfterAbstract";
import {OperatorFunctionAbstract} from "./abstract/OperatorFunctionAbstract";


export class Expression extends TermAbstract {

  terms: Array<TermAbstract> = new Array<TermAbstract>();
  private brackets: boolean = false;

  readonly precedence: number = 19;

  constructor(terms?: Array<TermAbstract>) {
    super();
    if(terms !== undefined)
      this.terms.concat(terms);
  }

  push(term: TermAbstract): Expression {
    this.terms.push(term);
    return this;
  }

  pop(): TermAbstract {
    return this.terms.pop();
  }

  shift(): TermAbstract {
    return this.terms.shift();
  }

  unshift(term: TermAbstract): Expression {
    this.terms.unshift(term);
    return this;
  }

  buildPrecedenceTree() {

  }

  evaluate(): number {

    let total = 0;
    if(this.terms.length>0) {
      let terms = new Array<TermAbstract>();
      terms.concat(this.terms);

      while(terms.length>1) {
        const sorted = this.terms.sort((a, b) => b.precedence-a.precedence);
        let precedence = sorted[0].precedence
        terms.forEach((t, id) => {
          if(t.precedence>precedence)
            precedence = t.precedence;
        });
      }
    }
    return total;
  }

  evaluate2(): number {

    let total = 0;
    if(this.terms.length>0) {
      let terms = new Array<TermAbstract>();
      terms.concat(this.terms);
      const sorted = this.terms.sort((a, b) => b.precedence-a.precedence);
      this.terms.forEach((t, id) => {

        if(t instanceof Expression) {
          t.evaluate();
        } else if(t instanceof OperatorAbstract) {
          if(t instanceof OperatorBeforeAfterAbstract) {
            t.evaluate();
          } else if(t instanceof OperatorFunctionAbstract) {
            t.evaluate();
          }
        } else if(t instanceof OperandAbstract) {
          t.evaluate();
        }

      });
    }
    return total;
  }
  toString(): string {
    let str = "";
    this.terms.forEach((t, id) => {
      str += t.toString();
    });
    return str;
  }
}
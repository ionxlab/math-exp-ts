import {Expression} from "../expression/Expression";
import {TermAbstract} from "../expression/abstract/TermAbstract";


export class ExpressionBuilder {

  private expression: Expression = new Expression();

  constructor(...terms: TermAbstract[]) {
    this.expression.terms = this.expression.terms.concat(terms);
    this.expression.setBrackets(false);
  }

  add(term: TermAbstract, index?: number): number {
    if(index!==undefined)
      this.expression.terms.splice(index, 0, term);
    else
      this.expression.push(term);

    return this.expression.terms.length;
  }

  remove(index): Expression {
    if(index>=0 && index<this.expression.terms.length)
      this.expression.terms.splice(index, 1);

    return this.expression;
  }

  getExpression(): Expression {
    return this.expression;
  }

  clear() {
    this.expression.terms = [];
  }
}
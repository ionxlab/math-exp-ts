import {ExpressionBuilder, Expression, Variable, Constant, PlusOperator, SquareRootOperator} from 'math-exp-ts';

const before = Date.now();
const builder = new ExpressionBuilder(new Variable('A', 2),  new PlusOperator(), new SquareRootOperator(new Constant(875654)));
Expression.debug = false;
Variable.values.set('A', 27);
let value = builder.getExpression().evaluate();

const after = Date.now();
const diff = after-before;

console.log("Evaluated in:", diff, "ms");
console.log("Expression:", builder.getExpression().toString());
console.log("Value:", value);
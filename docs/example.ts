import {ExpressionBuilder, MultiplyOperator, Expression, Variables, Variable, Constant, PlusOperator, MinusOperator, SquareRootOperator} from 'math-exp-ts';

// Measure elapsed time of a lambda function
function chrono(lambda: () => any) {
  const before = Date.now();
  lambda();
  const after = Date.now();
  const diff = after-before;
  console.log("Evaluated in:", diff, "ms");
}

// Configure static properties
Variables.map.set('A', 9);
//Expression.debug = true;

console.log("------------------------------------------------------------------");
chrono(() => {
  const builder = new ExpressionBuilder(
    new Constant(2),
    new PlusOperator(),
    new Constant(2),
    new MultiplyOperator(),
    new Variable('A'));

  const value = builder.getExpression().evaluate();

  console.log("Expression:", builder.getExpression().toString());
  console.log("Variable: 'A'=", Variables.map.get('A'));
  console.log("Value:", value);
});

console.log("------------------------------------------------------------------");
chrono(() => {
  const builder = new ExpressionBuilder(
    new Expression(
      new Constant(2),
      new PlusOperator(),
      new Constant(2)
    ),
    new MultiplyOperator(),
    new Variable('A'),
  );

  const value = builder.getExpression().evaluate();

  console.log("Expression:", builder.getExpression().toString());
  console.log("Variable: 'A'=", Variables.map.get('A'));
  console.log("Value:", value);
});

console.log("------------------------------------------------------------------");
chrono(() => {
  const builder = new ExpressionBuilder(
    new SquareRootOperator(),
    new Variable('A', true));

  const value = builder.getExpression().evaluate();

  console.log("Expression:", builder.getExpression().toString());
  console.log("Variable: 'A'=", Variables.map.get('A'));
  console.log("Value:", value);
});

console.log("------------------------------------------------------------------");
chrono(() => {
  const builder = new ExpressionBuilder(
    new Constant(2),
    new Expression(
      new Constant(2),
      new PlusOperator(),
      new Constant(2),
      new MultiplyOperator(),
      new Expression(
        new Constant(4),
        new MinusOperator(),
        new Constant(2),
        new MultiplyOperator(),
        new Variable('A')
      )
    )
  );

  const value = builder.getExpression().evaluate();

  console.log("Expression:", builder.getExpression().toString());
  console.log("Variable: 'A'=", Variables.map.get('A'));
  console.log("Value:", value);
});

console.log("------------------------------------------------------------------");
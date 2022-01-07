# Math-exp-ts

Math-exp is a math expression builder and parser library.

This version is written in typescript.

## Install
You can install by using npm repository.
```
npm install math-exp-ts
```
You can also install by using npm and git repository url.
```
npm install git+https://github.com/ionxlab/math-exp-ts.git
```

## Usage

Import the library and:

- Provide an expression string to evaluate.

```
import { ExpressionParser } from 'math-exp-ts';

const parser = new ExpressionParser("2(2+2*2)");

const expression = parser.parse();
const value = expression.evaluate();

console.log("String:", parser.getExpressionStr());
console.log("Expression:", expression.toString());
console.log("Value:", value); // expected value: 12
```

or

- Build an expression from term operands/operators and evaluate it.

```
import {
  ExpressionBuilder, Expression, Constant, MultiplyOperator, PlusOperator
} from 'math-exp-ts';

const builder = new ExpressionBuilder(
  new Constant(2),
  new Expression(
    new Constant(2),
    new PlusOperator(),
    new Constant(2)
    new MultiplyOperator(),
    new Constant(2)
  )
);

const expression = builder.getExpression();
const value = expression.evaluate();

console.log("Expression:", expression.toString());
console.log("Value:", value); // expected value: 12
```

See [example.ts](./docs/example-ts/example.ts) in docs.

## Operands
- Constant: any numeric value
- Variable: a character or a word (set value in Variables before evaluating)

## Operators

### Artihmetic
- Divide: '/'
- Exponent: '^'
- Minus: '-'
- Multiply: '*'
- Plus: '+'

### Bitwise
- And: '&'
- Or: '|'
- Xor: '||'

### Function
- Cos: 'cos()'
- Ln: 'ln()'
- Log: 'log()'
- Sin: 'sin()'
- Square Root: 'sqrt()'
- Tan: 'tan()'


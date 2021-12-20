declare module 'math-exp-ts/core/ExpressionBuilder' {
  import { Expression } from "math-exp-ts/expression/Expression";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class ExpressionBuilder {
      private expression;
      constructor(...terms: TermAbstract[]);
      add(term: TermAbstract, index?: number): number;
      remove(index: any): Expression;
      getExpression(): Expression;
      clear(): void;
  }

}
declare module 'math-exp-ts/core/ExpressionParser' {
  import { Expression } from "math-exp-ts/expression/Expression";
  export class ExpressionParser {
      private expressionString;
      constructor();
      parse(): Expression;
  }

}
declare module 'math-exp-ts/exceptions/DivisionByZeroException' {
  import { EvaluateException } from "math-exp-ts/exceptions/EvaluateException";
  export class DivisionByZeroException extends EvaluateException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/EmptyExpressionException' {
  import { EvaluateException } from "math-exp-ts/exceptions/EvaluateException";
  export class EmptyExpressionException extends EvaluateException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/EvaluateException' {
  export class EvaluateException extends Error {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/MissingOperandException' {
  import { MissingTermException } from "math-exp-ts/exceptions/MissingTermException";
  export class MissingOperandException extends MissingTermException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/MissingOperatorException' {
  import { MissingTermException } from "math-exp-ts/exceptions/MissingTermException";
  export class MissingOperatorException extends MissingTermException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/MissingTermException' {
  import { EvaluateException } from "math-exp-ts/exceptions/EvaluateException";
  export class MissingTermException extends EvaluateException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/ParserException' {
  export class ParserException extends Error {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/expression/abstract/OperandAbstract' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export abstract class OperandAbstract extends TermAbstract {
      readonly precedence: number;
      abstract evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorAbstract' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export abstract class OperatorAbstract extends TermAbstract {
      name: string;
      symbol: string;
      protected constructor(name: string, symbol: string);
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorFunctionAbstract' {
  import { OperatorAbstract } from "math-exp-ts/expression/abstract/OperatorAbstract";
  import { Expression } from "math-exp-ts/expression/Expression";
  export abstract class OperatorFunctionAbstract extends OperatorAbstract {
      name: string;
      symbol: string;
      expression: Expression;
      readonly precedence: number;
      protected constructor(name: string, symbol: string, expression?: Expression);
      abstract evaluate(): number;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorLeftRightAbstract' {
  import { OperatorAbstract } from "math-exp-ts/expression/abstract/OperatorAbstract";
  export abstract class OperatorLeftRightAbstract extends OperatorAbstract {
      name: string;
      symbol: string;
      protected constructor(name: string, symbol: string);
      abstract evaluate(left: number, right: number): number;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/abstract/TermAbstract' {
  export abstract class TermAbstract {
      abstract readonly precedence: number;
      abstract toString(): string;
  }

}
declare module 'math-exp-ts/expression/Expression' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class Expression extends TermAbstract {
      static debug: boolean;
      readonly precedence: number;
      terms: Array<TermAbstract>;
      private brackets;
      constructor(...terms: TermAbstract[]);
      push(term: TermAbstract): Expression;
      pop(): TermAbstract;
      shift(): TermAbstract;
      unshift(term: TermAbstract): Expression;
      setBrackets(active: boolean): void;
      evaluate(): number;
      private evaluateTerm;
      private Log;
      clone(): Expression;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/index' {
  export { Expression } from 'math-exp-ts/expression/Expression';
  export * from 'math-exp-ts/expression/operators/index';
  export * from 'math-exp-ts/expression/operands/index';
  export * from 'math-exp-ts/expression/utils/index';

}
declare module 'math-exp-ts/expression/operands/Constant' {
  import { OperandAbstract } from "math-exp-ts/expression/abstract/OperandAbstract";
  export class Constant extends OperandAbstract {
      value: number;
      constructor(value: number);
      evaluate(): number;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/operands/index' {
  export { Constant } from 'math-exp-ts/expression/operands/Constant';
  export { Variable } from 'math-exp-ts/expression/operands/Variable';

}
declare module 'math-exp-ts/expression/operands/Variable' {
  import { OperandAbstract } from "math-exp-ts/expression/abstract/OperandAbstract";
  import { VariableMap } from "math-exp-ts/expression/utils/VariableMap";
  export class Variable extends OperandAbstract {
      private coefficient;
      private letter;
      private static _values;
      constructor(letter: string, coefficient?: number, value?: number);
      static get values(): VariableMap;
      evaluate(): number;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Divide.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class DivideOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      constructor();
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Exponent.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class ExponentOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      constructor();
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Minus.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class MinusOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      constructor();
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Multiply.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class MultiplyOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      constructor();
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Plus.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class PlusOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      constructor();
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/And.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class AndOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/Or.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class OrOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/Xor.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  export class XorOperator extends OperatorLeftRightAbstract {
      readonly precedence: number;
      evaluate(left: number, right: number): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Cos.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class CosOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Ln.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class LnOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Log.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class LogOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Sin.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class SinOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/SquareRoot.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class SquareRootOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Tan.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class TanOperator extends OperatorFunctionAbstract {
      constructor(...terms: TermAbstract[]);
      evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/operators/index' {
  export { DivideOperator } from 'math-exp-ts/expression/operators/arithmetic/Divide.operator';
  export { ExponentOperator } from 'math-exp-ts/expression/operators/arithmetic/Exponent.operator';
  export { MinusOperator } from 'math-exp-ts/expression/operators/arithmetic/Minus.operator';
  export { MultiplyOperator } from 'math-exp-ts/expression/operators/arithmetic/Multiply.operator';
  export { PlusOperator } from 'math-exp-ts/expression/operators/arithmetic/Plus.operator';
  export { AndOperator } from 'math-exp-ts/expression/operators/bitwise/And.operator';
  export { OrOperator } from 'math-exp-ts/expression/operators/bitwise/Or.operator';
  export { XorOperator } from 'math-exp-ts/expression/operators/bitwise/Xor.operator';
  export { CosOperator } from 'math-exp-ts/expression/operators/function/Cos.operator';
  export { LnOperator } from 'math-exp-ts/expression/operators/function/Ln.operator';
  export { LogOperator } from 'math-exp-ts/expression/operators/function/Log.operator';
  export { SinOperator } from 'math-exp-ts/expression/operators/function/Sin.operator';
  export { SquareRootOperator } from 'math-exp-ts/expression/operators/function/SquareRoot.operator';
  export { TanOperator } from 'math-exp-ts/expression/operators/function/Tan.operator';

}
declare module 'math-exp-ts/expression/utils/index' {
  export { VariableMap } from 'math-exp-ts/expression/utils/VariableMap';

}
declare module 'math-exp-ts/expression/utils/VariableMap' {
  export class VariableMap extends Map<string, number> {
      constructor();
  }

}
declare module 'math-exp-ts/index' {
  export { ExpressionBuilder } from 'math-exp-ts/core/ExpressionBuilder';
  export { ExpressionParser } from 'math-exp-ts/core/ExpressionParser';
  export * from 'math-exp-ts/expression/index';

}
declare module 'math-exp-ts' {
  import main = require('math-exp-ts/index');
  export = main;
}
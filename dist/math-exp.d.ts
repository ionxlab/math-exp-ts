declare module 'math-exp-ts/core/ExpressionBuilder' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  import { Expression } from "math-exp-ts/expression/index";
  export class ExpressionBuilder {
      private expression;
      constructor(...terms: TermAbstract[]);
      add(term: TermAbstract, index?: number): number;
      addAll(...terms: TermAbstract[]): void;
      remove(index: any): Expression;
      getExpression(): Expression;
      clear(): void;
  }

}
declare module 'math-exp-ts/core/ExpressionParser' {
  import { Expression } from "math-exp-ts/expression/index";
  export class ExpressionParser {
      private expressionStr;
      constructor(expressionStr?: string);
      setExpressionStr(expressionStr?: string): void;
      parse(expressionStr?: string): Expression;
      private static parseElem;
  }

}
declare module 'math-exp-ts/exceptions/BracketsMissmatchException' {
  import { ParserException } from "math-exp-ts/exceptions/ParserException";
  export class BracketsMissmatchException extends ParserException {
      constructor(message?: string);
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
declare module 'math-exp-ts/exceptions/EmptyExpressionStringException' {
  import { ParserException } from "math-exp-ts/exceptions/ParserException";
  export class EmptyExpressionStringException extends ParserException {
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
declare module 'math-exp-ts/exceptions/UndefinedExpressionException' {
  import { EvaluateException } from "math-exp-ts/exceptions/EvaluateException";
  export class UndefinedExpressionException extends EvaluateException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/exceptions/UndefinedExpressionStringException' {
  import { ParserException } from "math-exp-ts/exceptions/ParserException";
  export class UndefinedExpressionStringException extends ParserException {
      constructor(message?: string);
  }

}
declare module 'math-exp-ts/expression/abstract/OperandAbstract' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export abstract class OperandAbstract extends TermAbstract {
      readonly precedence: number;
      protected _brackets: boolean;
      constructor(brackets?: boolean);
      get brackets(): boolean;
      set brackets(active: boolean);
      abstract evaluate(): number;
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorAbstract' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export abstract class OperatorAbstract extends TermAbstract {
      abstract readonly names: Array<string>;
      toString(nameId?: number): string;
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorFunctionAbstract' {
  import { OperatorAbstract } from "math-exp-ts/expression/abstract/OperatorAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export abstract class OperatorFunctionAbstract extends OperatorAbstract {
      readonly precedence: number;
      abstract evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/abstract/OperatorLeftRightAbstract' {
  import { OperatorAbstract } from "math-exp-ts/expression/abstract/OperatorAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export abstract class OperatorLeftRightAbstract extends OperatorAbstract {
      abstract evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/abstract/TermAbstract' {
  export abstract class TermAbstract {
      abstract readonly precedence: number;
      abstract toString(nameId?: number): string;
  }

}
declare module 'math-exp-ts/expression/core/Expression' {
  import { TermAbstract } from "math-exp-ts/expression/abstract/TermAbstract";
  export class Expression extends TermAbstract {
      static debug: boolean;
      readonly precedence: number;
      private _brackets;
      private _terms;
      constructor(...terms: TermAbstract[]);
      get terms(): Array<TermAbstract>;
      set terms(value: Array<TermAbstract>);
      get brackets(): boolean;
      set brackets(active: boolean);
      evaluate(): number;
      private static evaluateTerm;
      private static Log;
      clone(): Expression;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/core/index' {
  export { Expression } from 'math-exp-ts/expression/core/Expression';
  export { Variables } from 'math-exp-ts/expression/core/Variables';

}
declare module 'math-exp-ts/expression/core/Variables' {
  export class Variables {
      static map: Map<string, number>;
  }

}
declare module 'math-exp-ts/expression/index' {
  export * from 'math-exp-ts/expression/core/index';
  export * from 'math-exp-ts/expression/operators/index';
  export * from 'math-exp-ts/expression/operands/index';

}
declare module 'math-exp-ts/expression/operands/Constant' {
  import { OperandAbstract } from "math-exp-ts/expression/abstract/OperandAbstract";
  export class Constant extends OperandAbstract {
      value: number;
      constructor(value: number, brackets?: boolean);
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
  export class Variable extends OperandAbstract {
      private identifier;
      readonly precedence: number;
      constructor(identifier: string, brackets?: boolean, value?: number);
      evaluate(): number;
      toString(): string;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Divide.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class DivideOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Exponent.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class ExponentOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/index' {
  export { DivideOperator } from 'math-exp-ts/expression/operators/arithmetic/Divide.operator';
  export { ExponentOperator } from 'math-exp-ts/expression/operators/arithmetic/Exponent.operator';
  export { MinusOperator } from 'math-exp-ts/expression/operators/arithmetic/Minus.operator';
  export { MultiplyOperator } from 'math-exp-ts/expression/operators/arithmetic/Multiply.operator';
  export { PlusOperator } from 'math-exp-ts/expression/operators/arithmetic/Plus.operator';

}
declare module 'math-exp-ts/expression/operators/arithmetic/Minus.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class MinusOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Multiply.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class MultiplyOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      hidden: boolean;
      constructor(hidden?: boolean);
      evaluate(left: Constant, right: Constant): number;
      toString(nameId?: number): string;
  }

}
declare module 'math-exp-ts/expression/operators/arithmetic/Plus.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class PlusOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/And.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class AndOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/index' {
  export { AndOperator } from 'math-exp-ts/expression/operators/bitwise/And.operator';
  export { OrOperator } from 'math-exp-ts/expression/operators/bitwise/Or.operator';
  export { XorOperator } from 'math-exp-ts/expression/operators/bitwise/Xor.operator';

}
declare module 'math-exp-ts/expression/operators/bitwise/Or.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class OrOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/bitwise/Xor.operator' {
  import { OperatorLeftRightAbstract } from "math-exp-ts/expression/abstract/OperatorLeftRightAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class XorOperator extends OperatorLeftRightAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      readonly precedence: number;
      evaluate(left: Constant, right: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Cos.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class CosOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/index' {
  export { CosOperator } from 'math-exp-ts/expression/operators/function/Cos.operator';
  export { LnOperator } from 'math-exp-ts/expression/operators/function/Ln.operator';
  export { LogOperator } from 'math-exp-ts/expression/operators/function/Log.operator';
  export { SinOperator } from 'math-exp-ts/expression/operators/function/Sin.operator';
  export { SquareRootOperator } from 'math-exp-ts/expression/operators/function/SquareRoot.operator';
  export { TanOperator } from 'math-exp-ts/expression/operators/function/Tan.operator';

}
declare module 'math-exp-ts/expression/operators/function/Ln.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class LnOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Log.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class LogOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Sin.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class SinOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/SquareRoot.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class SquareRootOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/function/Tan.operator' {
  import { OperatorFunctionAbstract } from "math-exp-ts/expression/abstract/OperatorFunctionAbstract";
  import { Constant } from "math-exp-ts/expression/operands/index";
  export class TanOperator extends OperatorFunctionAbstract {
      static readonly names: Array<string>;
      readonly names: Array<string>;
      evaluate(param: Constant): number;
  }

}
declare module 'math-exp-ts/expression/operators/index' {
  export * from 'math-exp-ts/expression/operators/arithmetic/index';
  export * from 'math-exp-ts/expression/operators/bitwise/index';
  export * from 'math-exp-ts/expression/operators/function/index';

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
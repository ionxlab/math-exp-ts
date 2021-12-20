(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("math-exp", [], factory);
	else if(typeof exports === 'object')
		exports["math-exp"] = factory();
	else
		root["math-exp"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/ExpressionBuilder.ts":
/*!***************************************!*\
  !*** ./src/core/ExpressionBuilder.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionBuilder = void 0;
const Expression_1 = __webpack_require__(/*! ../expression/Expression */ "./src/expression/Expression.ts");
class ExpressionBuilder {
    constructor(...terms) {
        this.expression = new Expression_1.Expression();
        this.expression.terms = this.expression.terms.concat(terms);
        this.expression.setBrackets(false);
    }
    add(term, index) {
        if (index !== undefined)
            this.expression.terms.splice(index, 0, term);
        else
            this.expression.push(term);
        return this.expression.terms.length;
    }
    remove(index) {
        if (index >= 0 && index < this.expression.terms.length)
            this.expression.terms.splice(index, 1);
        return this.expression;
    }
    getExpression() {
        return this.expression;
    }
    clear() {
        this.expression.terms = [];
    }
}
exports.ExpressionBuilder = ExpressionBuilder;


/***/ }),

/***/ "./src/core/ExpressionParser.ts":
/*!**************************************!*\
  !*** ./src/core/ExpressionParser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionParser = void 0;
const Expression_1 = __webpack_require__(/*! ../expression/Expression */ "./src/expression/Expression.ts");
class ExpressionParser {
    constructor() {
    }
    parse() {
        let exp = new Expression_1.Expression();
        return exp;
    }
}
exports.ExpressionParser = ExpressionParser;


/***/ }),

/***/ "./src/exceptions/DivisionByZeroException.ts":
/*!***************************************************!*\
  !*** ./src/exceptions/DivisionByZeroException.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionByZeroException = void 0;
const EvaluateException_1 = __webpack_require__(/*! ./EvaluateException */ "./src/exceptions/EvaluateException.ts");
class DivisionByZeroException extends EvaluateException_1.EvaluateException {
    constructor(message) {
        super(message);
    }
}
exports.DivisionByZeroException = DivisionByZeroException;


/***/ }),

/***/ "./src/exceptions/EmptyExpressionException.ts":
/*!****************************************************!*\
  !*** ./src/exceptions/EmptyExpressionException.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmptyExpressionException = void 0;
const EvaluateException_1 = __webpack_require__(/*! ./EvaluateException */ "./src/exceptions/EvaluateException.ts");
class EmptyExpressionException extends EvaluateException_1.EvaluateException {
    constructor(message) {
        super(message);
    }
}
exports.EmptyExpressionException = EmptyExpressionException;


/***/ }),

/***/ "./src/exceptions/EvaluateException.ts":
/*!*********************************************!*\
  !*** ./src/exceptions/EvaluateException.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateException = void 0;
class EvaluateException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.EvaluateException = EvaluateException;


/***/ }),

/***/ "./src/exceptions/MissingOperandException.ts":
/*!***************************************************!*\
  !*** ./src/exceptions/MissingOperandException.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MissingOperandException = void 0;
const MissingTermException_1 = __webpack_require__(/*! ./MissingTermException */ "./src/exceptions/MissingTermException.ts");
class MissingOperandException extends MissingTermException_1.MissingTermException {
    constructor(message) {
        super(message);
    }
}
exports.MissingOperandException = MissingOperandException;


/***/ }),

/***/ "./src/exceptions/MissingTermException.ts":
/*!************************************************!*\
  !*** ./src/exceptions/MissingTermException.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MissingTermException = void 0;
const EvaluateException_1 = __webpack_require__(/*! ./EvaluateException */ "./src/exceptions/EvaluateException.ts");
class MissingTermException extends EvaluateException_1.EvaluateException {
    constructor(message) {
        super(message);
    }
}
exports.MissingTermException = MissingTermException;


/***/ }),

/***/ "./src/expression/Expression.ts":
/*!**************************************!*\
  !*** ./src/expression/Expression.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expression = void 0;
const OperatorAbstract_1 = __webpack_require__(/*! ./abstract/OperatorAbstract */ "./src/expression/abstract/OperatorAbstract.ts");
const OperandAbstract_1 = __webpack_require__(/*! ./abstract/OperandAbstract */ "./src/expression/abstract/OperandAbstract.ts");
const TermAbstract_1 = __webpack_require__(/*! ./abstract/TermAbstract */ "./src/expression/abstract/TermAbstract.ts");
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ./abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ./abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Constant_1 = __webpack_require__(/*! ./operands/Constant */ "./src/expression/operands/Constant.ts");
const MissingTermException_1 = __webpack_require__(/*! ../exceptions/MissingTermException */ "./src/exceptions/MissingTermException.ts");
const MissingOperandException_1 = __webpack_require__(/*! ../exceptions/MissingOperandException */ "./src/exceptions/MissingOperandException.ts");
const EmptyExpressionException_1 = __webpack_require__(/*! ../exceptions/EmptyExpressionException */ "./src/exceptions/EmptyExpressionException.ts");
class Expression extends TermAbstract_1.TermAbstract {
    constructor(...terms) {
        super();
        this.precedence = 19;
        this.terms = new Array();
        this.brackets = true;
        if (terms !== undefined)
            this.terms = this.terms.concat(terms);
    }
    push(term) {
        this.terms.push(term);
        return this;
    }
    pop() {
        return this.terms.pop();
    }
    shift() {
        return this.terms.shift();
    }
    unshift(term) {
        this.terms.unshift(term);
        return this;
    }
    setBrackets(active) {
        this.brackets = active;
    }
    evaluate() {
        if (this.terms.length == 0)
            throw new EmptyExpressionException_1.EmptyExpressionException();
        this.Log("Evaluating:", this.toString());
        let temp = this.clone();
        while (temp.terms.length > 1 || !(temp.terms[0] instanceof OperandAbstract_1.OperandAbstract)) {
            let highest = -1;
            let highestId = -1;
            temp.terms.forEach((t, id) => {
                if (t.precedence > highest) {
                    highest = t.precedence;
                    highestId = id;
                }
            });
            temp = this.evaluateTerm(temp, highestId);
            this.Log("Temporary expression:", temp.toString());
        }
        return temp.terms[0].evaluate();
    }
    evaluateTerm(expression, index) {
        let temp = expression.clone();
        const term = temp.terms[index];
        this.Log("Evaluating Term:", term.toString());
        let value = 0;
        if (!term) {
            throw new MissingTermException_1.MissingTermException("Term at '" + index + "' is missing.");
        }
        else if (term instanceof Expression) {
            this.Log("Term is an 'Expression'");
            value = term.evaluate();
            temp.terms[index] = new Constant_1.Constant(value);
        }
        else if (term instanceof OperatorAbstract_1.OperatorAbstract) {
            if (term instanceof OperatorLeftRightAbstract_1.OperatorLeftRightAbstract) {
                this.Log("Term is an 'OperatorLeftRight'");
                const left = temp.terms[index - 1];
                const right = temp.terms[index + 1];
                if (!(left instanceof OperandAbstract_1.OperandAbstract))
                    throw new MissingOperandException_1.MissingOperandException("Left argument of operator '" + term.toString() + "' is invalid.");
                if (!(right instanceof OperandAbstract_1.OperandAbstract))
                    throw new MissingOperandException_1.MissingOperandException("Right argument of operator '" + term.toString() + "' is invalid.");
                value = term.evaluate(left.evaluate(), right.evaluate());
                this.Log("Evaluated Value: ", value);
                temp.terms[index] = new Constant_1.Constant(value);
                temp.terms.splice(index + 1, 1);
                temp.terms.splice(index - 1, 1);
            }
            else if (term instanceof OperatorFunctionAbstract_1.OperatorFunctionAbstract) {
                this.Log("Term is an 'OperatorFunction'");
                value = term.evaluate();
                temp.terms[index] = new Constant_1.Constant(value);
            }
        }
        else if (term instanceof OperandAbstract_1.OperandAbstract) {
            this.Log("Term is an 'Operand'");
            value = term.evaluate();
            temp.terms[index] = new Constant_1.Constant(value);
        }
        return temp;
    }
    Log(...args) {
        if (Expression.debug)
            console.log.apply(console, args);
    }
    clone() {
        let clone = new Expression();
        clone.brackets = this.brackets;
        clone.terms = clone.terms.concat(this.terms);
        return clone;
    }
    toString() {
        let str = "";
        this.terms.forEach((t, id) => {
            str += t.toString();
        });
        if (this.brackets)
            str = "(" + str + ")";
        return str;
    }
}
exports.Expression = Expression;
Expression.debug = true;


/***/ }),

/***/ "./src/expression/abstract/OperandAbstract.ts":
/*!****************************************************!*\
  !*** ./src/expression/abstract/OperandAbstract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperandAbstract = void 0;
const TermAbstract_1 = __webpack_require__(/*! ./TermAbstract */ "./src/expression/abstract/TermAbstract.ts");
class OperandAbstract extends TermAbstract_1.TermAbstract {
    constructor() {
        super(...arguments);
        this.precedence = 0;
    }
}
exports.OperandAbstract = OperandAbstract;


/***/ }),

/***/ "./src/expression/abstract/OperatorAbstract.ts":
/*!*****************************************************!*\
  !*** ./src/expression/abstract/OperatorAbstract.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorAbstract = void 0;
const TermAbstract_1 = __webpack_require__(/*! ./TermAbstract */ "./src/expression/abstract/TermAbstract.ts");
class OperatorAbstract extends TermAbstract_1.TermAbstract {
    constructor(name, symbol) {
        super();
        this.name = name;
        this.symbol = symbol;
    }
}
exports.OperatorAbstract = OperatorAbstract;


/***/ }),

/***/ "./src/expression/abstract/OperatorFunctionAbstract.ts":
/*!*************************************************************!*\
  !*** ./src/expression/abstract/OperatorFunctionAbstract.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorFunctionAbstract = void 0;
const OperatorAbstract_1 = __webpack_require__(/*! ./OperatorAbstract */ "./src/expression/abstract/OperatorAbstract.ts");
class OperatorFunctionAbstract extends OperatorAbstract_1.OperatorAbstract {
    constructor(name, symbol, expression) {
        super(name, symbol);
        this.precedence = 18;
        this.expression = expression;
    }
    toString() {
        return this.symbol + this.expression.toString();
    }
    ;
}
exports.OperatorFunctionAbstract = OperatorFunctionAbstract;


/***/ }),

/***/ "./src/expression/abstract/OperatorLeftRightAbstract.ts":
/*!**************************************************************!*\
  !*** ./src/expression/abstract/OperatorLeftRightAbstract.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorLeftRightAbstract = void 0;
const OperatorAbstract_1 = __webpack_require__(/*! ./OperatorAbstract */ "./src/expression/abstract/OperatorAbstract.ts");
class OperatorLeftRightAbstract extends OperatorAbstract_1.OperatorAbstract {
    constructor(name, symbol) {
        super(name, symbol);
        this.name = name;
        this.symbol = symbol;
    }
    toString() {
        return this.symbol;
    }
    ;
}
exports.OperatorLeftRightAbstract = OperatorLeftRightAbstract;


/***/ }),

/***/ "./src/expression/abstract/TermAbstract.ts":
/*!*************************************************!*\
  !*** ./src/expression/abstract/TermAbstract.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TermAbstract = void 0;
class TermAbstract {
}
exports.TermAbstract = TermAbstract;


/***/ }),

/***/ "./src/expression/index.ts":
/*!*********************************!*\
  !*** ./src/expression/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expression = void 0;
var Expression_1 = __webpack_require__(/*! ./Expression */ "./src/expression/Expression.ts");
Object.defineProperty(exports, "Expression", ({ enumerable: true, get: function () { return Expression_1.Expression; } }));
__exportStar(__webpack_require__(/*! ./operators */ "./src/expression/operators/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./operands */ "./src/expression/operands/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./src/expression/utils/index.ts"), exports);


/***/ }),

/***/ "./src/expression/operands/Constant.ts":
/*!*********************************************!*\
  !*** ./src/expression/operands/Constant.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Constant = void 0;
const OperandAbstract_1 = __webpack_require__(/*! ../abstract/OperandAbstract */ "./src/expression/abstract/OperandAbstract.ts");
class Constant extends OperandAbstract_1.OperandAbstract {
    constructor(value) {
        super();
        this.value = value;
    }
    evaluate() {
        return this.value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.Constant = Constant;


/***/ }),

/***/ "./src/expression/operands/Variable.ts":
/*!*********************************************!*\
  !*** ./src/expression/operands/Variable.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Variable = void 0;
const OperandAbstract_1 = __webpack_require__(/*! ../abstract/OperandAbstract */ "./src/expression/abstract/OperandAbstract.ts");
const VariableMap_1 = __webpack_require__(/*! ../utils/VariableMap */ "./src/expression/utils/VariableMap.ts");
class Variable extends OperandAbstract_1.OperandAbstract {
    constructor(letter, coefficient, value) {
        super();
        this.coefficient = 0;
        this.letter = letter;
        if (coefficient !== undefined)
            this.coefficient = coefficient;
        if (value !== undefined)
            Variable._values.set(this.letter, value);
    }
    static get values() {
        return Variable._values;
    }
    evaluate() {
        let val = Variable._values.get(this.letter);
        if (val == undefined)
            val = 0;
        return (this.coefficient * val);
    }
    toString() {
        return this.coefficient.toString() + this.letter;
    }
}
exports.Variable = Variable;
Variable._values = new VariableMap_1.VariableMap();


/***/ }),

/***/ "./src/expression/operands/index.ts":
/*!******************************************!*\
  !*** ./src/expression/operands/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Variable = exports.Constant = void 0;
var Constant_1 = __webpack_require__(/*! ./Constant */ "./src/expression/operands/Constant.ts");
Object.defineProperty(exports, "Constant", ({ enumerable: true, get: function () { return Constant_1.Constant; } }));
var Variable_1 = __webpack_require__(/*! ./Variable */ "./src/expression/operands/Variable.ts");
Object.defineProperty(exports, "Variable", ({ enumerable: true, get: function () { return Variable_1.Variable; } }));


/***/ }),

/***/ "./src/expression/operators/arithmetic/Divide.operator.ts":
/*!****************************************************************!*\
  !*** ./src/expression/operators/arithmetic/Divide.operator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivideOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
const DivisionByZeroException_1 = __webpack_require__(/*! ../../../exceptions/DivisionByZeroException */ "./src/exceptions/DivisionByZeroException.ts");
class DivideOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super("Divide", "/");
        this.precedence = 13;
    }
    evaluate(left, right) {
        if (right == 0)
            throw new DivisionByZeroException_1.DivisionByZeroException();
        return left / right;
    }
}
exports.DivideOperator = DivideOperator;


/***/ }),

/***/ "./src/expression/operators/arithmetic/Exponent.operator.ts":
/*!******************************************************************!*\
  !*** ./src/expression/operators/arithmetic/Exponent.operator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExponentOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class ExponentOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super("Exponent", "^");
        this.precedence = 14;
    }
    evaluate(left, right) {
        return Math.pow(left, right);
    }
}
exports.ExponentOperator = ExponentOperator;


/***/ }),

/***/ "./src/expression/operators/arithmetic/Minus.operator.ts":
/*!***************************************************************!*\
  !*** ./src/expression/operators/arithmetic/Minus.operator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinusOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class MinusOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super("Minus", "-");
        this.precedence = 12;
    }
    evaluate(left, right) {
        return left - right;
    }
}
exports.MinusOperator = MinusOperator;


/***/ }),

/***/ "./src/expression/operators/arithmetic/Multiply.operator.ts":
/*!******************************************************************!*\
  !*** ./src/expression/operators/arithmetic/Multiply.operator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultiplyOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class MultiplyOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super("Multiply", "*");
        this.precedence = 13;
    }
    evaluate(left, right) {
        return left * right;
    }
}
exports.MultiplyOperator = MultiplyOperator;


/***/ }),

/***/ "./src/expression/operators/arithmetic/Plus.operator.ts":
/*!**************************************************************!*\
  !*** ./src/expression/operators/arithmetic/Plus.operator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlusOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class PlusOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super("Plus", "+");
        this.precedence = 12;
    }
    evaluate(left, right) {
        return left + right;
    }
}
exports.PlusOperator = PlusOperator;


/***/ }),

/***/ "./src/expression/operators/bitwise/And.operator.ts":
/*!**********************************************************!*\
  !*** ./src/expression/operators/bitwise/And.operator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AndOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class AndOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super(...arguments);
        this.precedence = 8;
    }
    evaluate(left, right) {
        return left & right;
    }
}
exports.AndOperator = AndOperator;


/***/ }),

/***/ "./src/expression/operators/bitwise/Or.operator.ts":
/*!*********************************************************!*\
  !*** ./src/expression/operators/bitwise/Or.operator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class OrOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super(...arguments);
        this.precedence = 6;
    }
    evaluate(left, right) {
        return left | right;
    }
}
exports.OrOperator = OrOperator;


/***/ }),

/***/ "./src/expression/operators/bitwise/Xor.operator.ts":
/*!**********************************************************!*\
  !*** ./src/expression/operators/bitwise/Xor.operator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XorOperator = void 0;
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
class XorOperator extends OperatorLeftRightAbstract_1.OperatorLeftRightAbstract {
    constructor() {
        super(...arguments);
        this.precedence = 7;
    }
    evaluate(left, right) {
        return left ^ right;
    }
}
exports.XorOperator = XorOperator;


/***/ }),

/***/ "./src/expression/operators/function/Cos.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Cos.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CosOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class CosOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Cos", "cos", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.cos(result);
    }
}
exports.CosOperator = CosOperator;


/***/ }),

/***/ "./src/expression/operators/function/Ln.operator.ts":
/*!**********************************************************!*\
  !*** ./src/expression/operators/function/Ln.operator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LnOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class LnOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Ln", "Ln", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.log(result);
    }
}
exports.LnOperator = LnOperator;


/***/ }),

/***/ "./src/expression/operators/function/Log.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Log.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class LogOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Log", "Log", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.log10(result);
    }
}
exports.LogOperator = LogOperator;


/***/ }),

/***/ "./src/expression/operators/function/Sin.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Sin.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SinOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class SinOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Sin", "sin", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.sin(result);
    }
}
exports.SinOperator = SinOperator;


/***/ }),

/***/ "./src/expression/operators/function/SquareRoot.operator.ts":
/*!******************************************************************!*\
  !*** ./src/expression/operators/function/SquareRoot.operator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SquareRootOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class SquareRootOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Sqrt", "√", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.sqrt(result);
    }
}
exports.SquareRootOperator = SquareRootOperator;


/***/ }),

/***/ "./src/expression/operators/function/Tan.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Tan.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TanOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const Expression_1 = __webpack_require__(/*! ../../Expression */ "./src/expression/Expression.ts");
class TanOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor(...terms) {
        super("Tan", "tan", new Expression_1.Expression(...terms));
    }
    evaluate() {
        const result = this.expression.evaluate();
        return Math.tan(result);
    }
}
exports.TanOperator = TanOperator;


/***/ }),

/***/ "./src/expression/operators/index.ts":
/*!*******************************************!*\
  !*** ./src/expression/operators/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TanOperator = exports.SquareRootOperator = exports.SinOperator = exports.LogOperator = exports.LnOperator = exports.CosOperator = exports.XorOperator = exports.OrOperator = exports.AndOperator = exports.PlusOperator = exports.MultiplyOperator = exports.MinusOperator = exports.ExponentOperator = exports.DivideOperator = void 0;
var Divide_operator_1 = __webpack_require__(/*! ./arithmetic/Divide.operator */ "./src/expression/operators/arithmetic/Divide.operator.ts");
Object.defineProperty(exports, "DivideOperator", ({ enumerable: true, get: function () { return Divide_operator_1.DivideOperator; } }));
var Exponent_operator_1 = __webpack_require__(/*! ./arithmetic/Exponent.operator */ "./src/expression/operators/arithmetic/Exponent.operator.ts");
Object.defineProperty(exports, "ExponentOperator", ({ enumerable: true, get: function () { return Exponent_operator_1.ExponentOperator; } }));
var Minus_operator_1 = __webpack_require__(/*! ./arithmetic/Minus.operator */ "./src/expression/operators/arithmetic/Minus.operator.ts");
Object.defineProperty(exports, "MinusOperator", ({ enumerable: true, get: function () { return Minus_operator_1.MinusOperator; } }));
var Multiply_operator_1 = __webpack_require__(/*! ./arithmetic/Multiply.operator */ "./src/expression/operators/arithmetic/Multiply.operator.ts");
Object.defineProperty(exports, "MultiplyOperator", ({ enumerable: true, get: function () { return Multiply_operator_1.MultiplyOperator; } }));
var Plus_operator_1 = __webpack_require__(/*! ./arithmetic/Plus.operator */ "./src/expression/operators/arithmetic/Plus.operator.ts");
Object.defineProperty(exports, "PlusOperator", ({ enumerable: true, get: function () { return Plus_operator_1.PlusOperator; } }));
var And_operator_1 = __webpack_require__(/*! ./bitwise/And.operator */ "./src/expression/operators/bitwise/And.operator.ts");
Object.defineProperty(exports, "AndOperator", ({ enumerable: true, get: function () { return And_operator_1.AndOperator; } }));
var Or_operator_1 = __webpack_require__(/*! ./bitwise/Or.operator */ "./src/expression/operators/bitwise/Or.operator.ts");
Object.defineProperty(exports, "OrOperator", ({ enumerable: true, get: function () { return Or_operator_1.OrOperator; } }));
var Xor_operator_1 = __webpack_require__(/*! ./bitwise/Xor.operator */ "./src/expression/operators/bitwise/Xor.operator.ts");
Object.defineProperty(exports, "XorOperator", ({ enumerable: true, get: function () { return Xor_operator_1.XorOperator; } }));
var Cos_operator_1 = __webpack_require__(/*! ./function/Cos.operator */ "./src/expression/operators/function/Cos.operator.ts");
Object.defineProperty(exports, "CosOperator", ({ enumerable: true, get: function () { return Cos_operator_1.CosOperator; } }));
var Ln_operator_1 = __webpack_require__(/*! ./function/Ln.operator */ "./src/expression/operators/function/Ln.operator.ts");
Object.defineProperty(exports, "LnOperator", ({ enumerable: true, get: function () { return Ln_operator_1.LnOperator; } }));
var Log_operator_1 = __webpack_require__(/*! ./function/Log.operator */ "./src/expression/operators/function/Log.operator.ts");
Object.defineProperty(exports, "LogOperator", ({ enumerable: true, get: function () { return Log_operator_1.LogOperator; } }));
var Sin_operator_1 = __webpack_require__(/*! ./function/Sin.operator */ "./src/expression/operators/function/Sin.operator.ts");
Object.defineProperty(exports, "SinOperator", ({ enumerable: true, get: function () { return Sin_operator_1.SinOperator; } }));
var SquareRoot_operator_1 = __webpack_require__(/*! ./function/SquareRoot.operator */ "./src/expression/operators/function/SquareRoot.operator.ts");
Object.defineProperty(exports, "SquareRootOperator", ({ enumerable: true, get: function () { return SquareRoot_operator_1.SquareRootOperator; } }));
var Tan_operator_1 = __webpack_require__(/*! ./function/Tan.operator */ "./src/expression/operators/function/Tan.operator.ts");
Object.defineProperty(exports, "TanOperator", ({ enumerable: true, get: function () { return Tan_operator_1.TanOperator; } }));


/***/ }),

/***/ "./src/expression/utils/VariableMap.ts":
/*!*********************************************!*\
  !*** ./src/expression/utils/VariableMap.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariableMap = void 0;
class VariableMap extends Map {
    constructor() {
        super();
        this.set('a', 0);
        this.set('b', 0);
        this.set('c', 0);
        this.set('d', 0);
        this.set('e', 0);
        this.set('f', 0);
        this.set('g', 0);
        this.set('h', 0);
        this.set('i', 0);
        this.set('j', 0);
        this.set('k', 0);
        this.set('l', 0);
        this.set('m', 0);
        this.set('n', 0);
        this.set('o', 0);
        this.set('p', 0);
        this.set('q', 0);
        this.set('r', 0);
        this.set('s', 0);
        this.set('t', 0);
        this.set('u', 0);
        this.set('v', 0);
        this.set('w', 0);
        this.set('x', 0);
        this.set('y', 0);
        this.set('z', 0);
        this.set('A', 0);
        this.set('B', 0);
        this.set('C', 0);
        this.set('D', 0);
        this.set('E', 0);
        this.set('F', 0);
        this.set('G', 0);
        this.set('H', 0);
        this.set('I', 0);
        this.set('J', 0);
        this.set('K', 0);
        this.set('L', 0);
        this.set('M', 0);
        this.set('N', 0);
        this.set('O', 0);
        this.set('P', 0);
        this.set('Q', 0);
        this.set('R', 0);
        this.set('S', 0);
        this.set('T', 0);
        this.set('U', 0);
        this.set('V', 0);
        this.set('W', 0);
        this.set('X', 0);
        this.set('Y', 0);
        this.set('Z', 0);
    }
}
exports.VariableMap = VariableMap;


/***/ }),

/***/ "./src/expression/utils/index.ts":
/*!***************************************!*\
  !*** ./src/expression/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariableMap = void 0;
var VariableMap_1 = __webpack_require__(/*! ./VariableMap */ "./src/expression/utils/VariableMap.ts");
Object.defineProperty(exports, "VariableMap", ({ enumerable: true, get: function () { return VariableMap_1.VariableMap; } }));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionParser = exports.ExpressionBuilder = void 0;
var ExpressionBuilder_1 = __webpack_require__(/*! ./core/ExpressionBuilder */ "./src/core/ExpressionBuilder.ts");
Object.defineProperty(exports, "ExpressionBuilder", ({ enumerable: true, get: function () { return ExpressionBuilder_1.ExpressionBuilder; } }));
var ExpressionParser_1 = __webpack_require__(/*! ./core/ExpressionParser */ "./src/core/ExpressionParser.ts");
Object.defineProperty(exports, "ExpressionParser", ({ enumerable: true, get: function () { return ExpressionParser_1.ExpressionParser; } }));
__exportStar(__webpack_require__(/*! ./expression */ "./src/expression/index.ts"), exports);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=math-exp.js.map
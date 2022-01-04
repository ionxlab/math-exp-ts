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
const expression_1 = __webpack_require__(/*! ../expression */ "./src/expression/index.ts");
class ExpressionBuilder {
    constructor(...terms) {
        this.expression = new expression_1.Expression();
        this.expression.terms = this.expression.terms.concat(terms);
        this.expression.brackets = false;
    }
    add(term, index) {
        if (index !== undefined)
            this.expression.terms.splice(index, 0, term);
        else
            this.expression.terms.push(term);
        return this.expression.terms.length;
    }
    addAll(...terms) {
        this.expression.terms = this.expression.terms.concat(terms);
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
const expression_1 = __webpack_require__(/*! ../expression */ "./src/expression/index.ts");
const expression_2 = __webpack_require__(/*! ../expression */ "./src/expression/index.ts");
const Operators = __webpack_require__(/*! ../expression/operators */ "./src/expression/operators/index.ts");
const BracketsMissmatchException_1 = __webpack_require__(/*! ../exceptions/BracketsMissmatchException */ "./src/exceptions/BracketsMissmatchException.ts");
const EmptyExpressionStringException_1 = __webpack_require__(/*! ../exceptions/EmptyExpressionStringException */ "./src/exceptions/EmptyExpressionStringException.ts");
const UndefinedExpressionStringException_1 = __webpack_require__(/*! ../exceptions/UndefinedExpressionStringException */ "./src/exceptions/UndefinedExpressionStringException.ts");
const ParserException_1 = __webpack_require__(/*! ../exceptions/ParserException */ "./src/exceptions/ParserException.ts");
const OperatorKeys = Object.keys(Operators);
class ExpressionParser {
    constructor(expressionStr) {
        this.expressionStr = expressionStr;
    }
    setExpressionStr(expressionStr) {
        this.expressionStr = expressionStr;
    }
    parse(expressionStr) {
        if (expressionStr !== undefined)
            this.setExpressionStr(expressionStr);
        // check expression string
        if (!this.expressionStr)
            throw new UndefinedExpressionStringException_1.UndefinedExpressionStringException();
        if (this.expressionStr == "")
            throw new EmptyExpressionStringException_1.EmptyExpressionStringException();
        // parse all elements from expression string
        const matches = this.expressionStr.match(/[a-z0-9]+|[+\-*\/()^]|[&|]+/gi);
        // check number of brackets
        const leftBrackets = matches.filter(value => value == '(');
        const rightBrackets = matches.filter(value => value == ')');
        if (leftBrackets.length !== rightBrackets.length)
            throw new BracketsMissmatchException_1.BracketsMissmatchException();
        // create a depth array for nested expressions
        let exp = new expression_1.Expression();
        const expStack = new Array();
        expStack.push(exp);
        // iterate over all expression term elements
        matches.forEach((elem, index) => {
            const currentExp = expStack[expStack.length - 1];
            // parse elem and return a TermAbstract
            const term = ExpressionParser.parseElem(elem, currentExp);
            if (!term)
                throw new ParserException_1.ParserException("Unknown element: [" + elem + "]");
            // if term is an Expression
            if (term instanceof expression_1.Expression) {
                // if expression is not the current expression, push to expression stack
                if (term !== currentExp) {
                    expStack.push(term);
                    // else the expression is closed, remove from stack
                }
                else {
                    expStack.pop();
                }
            }
        });
        return exp;
    }
    static parseElem(elem, currentExpression) {
        let term;
        // if elem matches a numerical constant [0-9]+
        let match = elem.match(/^[0-9]+$/i);
        if (match) {
            term = new expression_2.Constant(parseFloat(elem));
            currentExpression.terms.push(term);
            return term;
        }
        // if elem matches a left bracket with a coefficient
        match = elem.match(/^([0-9]*)\($/i);
        if (match) {
            if (match[1]) {
                currentExpression.terms.push(new expression_2.Constant(parseFloat(match[1])));
                currentExpression.terms.push(new expression_1.MultiplyOperator());
            }
            term = new expression_1.Expression();
            currentExpression.terms.push(term);
            return term;
        }
        // if elem matches a right bracket
        match = elem.match(/^\)$/i);
        if (match) {
            return currentExpression;
        }
        // if match a named variable with a coefficient
        match = elem.match(/^([0-9]*)([a-z]+)$/i);
        if (match) {
            if (match[1].length > 0) {
                currentExpression.terms.push(new expression_2.Constant(parseFloat(match[1])));
                currentExpression.terms.push(new expression_1.MultiplyOperator());
            }
            // if elem matches an operator
            // iterate over all operators
            for (const key of OperatorKeys) {
                const Operator = Operators[key];
                // iterate over all operator names
                for (const name of Operator.names) {
                    // if name matches, return the constructed operator
                    if (name === match[2]) {
                        term = new Operators[key]();
                        currentExpression.terms.push(term);
                        return term;
                    }
                }
            }
            // it's just a variable
            term = new expression_2.Variable(match[2]);
            currentExpression.terms.push(term);
            return term;
        }
    }
}
exports.ExpressionParser = ExpressionParser;


/***/ }),

/***/ "./src/exceptions/BracketsMissmatchException.ts":
/*!******************************************************!*\
  !*** ./src/exceptions/BracketsMissmatchException.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BracketsMissmatchException = void 0;
const ParserException_1 = __webpack_require__(/*! ./ParserException */ "./src/exceptions/ParserException.ts");
class BracketsMissmatchException extends ParserException_1.ParserException {
    constructor(message) {
        super(message);
    }
}
exports.BracketsMissmatchException = BracketsMissmatchException;


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

/***/ "./src/exceptions/EmptyExpressionStringException.ts":
/*!**********************************************************!*\
  !*** ./src/exceptions/EmptyExpressionStringException.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmptyExpressionStringException = void 0;
const ParserException_1 = __webpack_require__(/*! ./ParserException */ "./src/exceptions/ParserException.ts");
class EmptyExpressionStringException extends ParserException_1.ParserException {
    constructor(message) {
        super(message);
    }
}
exports.EmptyExpressionStringException = EmptyExpressionStringException;


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

/***/ "./src/exceptions/ParserException.ts":
/*!*******************************************!*\
  !*** ./src/exceptions/ParserException.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParserException = void 0;
class ParserException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ParserException = ParserException;


/***/ }),

/***/ "./src/exceptions/UndefinedExpressionStringException.ts":
/*!**************************************************************!*\
  !*** ./src/exceptions/UndefinedExpressionStringException.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UndefinedExpressionStringException = void 0;
const ParserException_1 = __webpack_require__(/*! ./ParserException */ "./src/exceptions/ParserException.ts");
class UndefinedExpressionStringException extends ParserException_1.ParserException {
    constructor(message) {
        super(message);
    }
}
exports.UndefinedExpressionStringException = UndefinedExpressionStringException;


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
    constructor(brackets) {
        super();
        this.precedence = 0;
        this._brackets = false;
        if (brackets !== undefined)
            this._brackets = brackets;
    }
    get brackets() {
        return this._brackets;
    }
    set brackets(active) {
        this._brackets = active;
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
    toString(nameId) {
        let id = 0;
        if (nameId !== undefined && nameId >= 0 && nameId < this.names.length)
            id = 0;
        return this.names[id];
    }
    ;
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
    constructor() {
        super(...arguments);
        this.precedence = 18;
    }
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

/***/ "./src/expression/core/Expression.ts":
/*!*******************************************!*\
  !*** ./src/expression/core/Expression.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expression = void 0;
const OperatorAbstract_1 = __webpack_require__(/*! ../abstract/OperatorAbstract */ "./src/expression/abstract/OperatorAbstract.ts");
const OperandAbstract_1 = __webpack_require__(/*! ../abstract/OperandAbstract */ "./src/expression/abstract/OperandAbstract.ts");
const TermAbstract_1 = __webpack_require__(/*! ../abstract/TermAbstract */ "./src/expression/abstract/TermAbstract.ts");
const OperatorLeftRightAbstract_1 = __webpack_require__(/*! ../abstract/OperatorLeftRightAbstract */ "./src/expression/abstract/OperatorLeftRightAbstract.ts");
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
const operands_1 = __webpack_require__(/*! ../operands */ "./src/expression/operands/index.ts");
const MissingTermException_1 = __webpack_require__(/*! ../../exceptions/MissingTermException */ "./src/exceptions/MissingTermException.ts");
const MissingOperandException_1 = __webpack_require__(/*! ../../exceptions/MissingOperandException */ "./src/exceptions/MissingOperandException.ts");
const EmptyExpressionException_1 = __webpack_require__(/*! ../../exceptions/EmptyExpressionException */ "./src/exceptions/EmptyExpressionException.ts");
class Expression extends TermAbstract_1.TermAbstract {
    constructor(...terms) {
        super();
        this.precedence = 19;
        this._brackets = true;
        this._terms = new Array();
        if (terms !== undefined)
            this._terms = this._terms.concat(terms);
    }
    get terms() {
        return this._terms;
    }
    set terms(value) {
        this._terms = value;
    }
    get brackets() {
        return this._brackets;
    }
    set brackets(active) {
        this._brackets = active;
    }
    evaluate() {
        // check terms
        if (this._terms.length == 0)
            throw new EmptyExpressionException_1.EmptyExpressionException();
        Expression.Log("Evaluating:", this.toString());
        // make a clone for editing
        let temp = this.clone();
        // loop until one constant is left
        while (temp._terms.length > 1 || !(temp._terms[0] instanceof operands_1.Constant)) {
            let highest = -1;
            let highestId = -1;
            // iterate over all terms and evaluate highest precedence
            temp._terms.forEach((t, id) => {
                if (t.precedence > highest) {
                    highest = t.precedence;
                    highestId = id;
                }
            });
            Expression.evaluateTerm(temp, highestId);
            Expression.Log("Temporary expression:", temp.toString());
        }
        return temp._terms[0].evaluate();
    }
    static evaluateTerm(expression, index) {
        const term = expression._terms[index];
        Expression.Log("Evaluating Term:", term.toString());
        let value = 0;
        if (!term)
            throw new MissingTermException_1.MissingTermException("Term at '" + index + "' is missing.");
        if (term instanceof Expression) {
            Expression.Log("Term is an 'Expression'");
            value = term.evaluate();
            expression._terms[index] = new operands_1.Constant(value, true);
        }
        else if (term instanceof OperandAbstract_1.OperandAbstract) {
            if (term instanceof operands_1.Constant)
                Expression.Log("Term is a 'Constant'");
            if (term instanceof operands_1.Variable)
                Expression.Log("Term is a 'Variable'");
            value = term.evaluate();
            expression._terms[index] = new operands_1.Constant(value, term.brackets);
        }
        else if (term instanceof OperatorAbstract_1.OperatorAbstract) {
            if (term instanceof OperatorLeftRightAbstract_1.OperatorLeftRightAbstract) {
                Expression.Log("Term is an 'OperatorLeftRight'");
                const left = expression._terms[index - 1];
                const right = expression._terms[index + 1];
                if (!(left instanceof operands_1.Constant))
                    throw new MissingOperandException_1.MissingOperandException("Operator '" + term.toString() + "' left argument '" + left.toString() + "' is invalid.");
                if (!(right instanceof operands_1.Constant))
                    throw new MissingOperandException_1.MissingOperandException("Operator '" + term.toString() + "' right argument '" + right.toString() + "' is invalid.");
                value = term.evaluate(left, right);
                Expression.Log("Evaluated Value: ", value);
                expression._terms[index] = new operands_1.Constant(value);
                expression._terms.splice(index + 1, 1);
                expression._terms.splice(index - 1, 1);
            }
            else if (term instanceof OperatorFunctionAbstract_1.OperatorFunctionAbstract) {
                Expression.Log("Term is an 'OperatorFunction'");
                const param = expression._terms[index + 1];
                if (!(param instanceof operands_1.Constant))
                    throw new MissingOperandException_1.MissingOperandException("Operator '" + term.toString() + "' argument '" + param.toString() + "' is invalid.");
                value = term.evaluate(param);
                expression._terms[index] = new operands_1.Constant(value);
                expression._terms.splice(index + 1, 1);
            }
            else {
                Expression.Log("Unknown operator term ?");
            }
        }
        else {
            Expression.Log("Unknown term ?");
        }
        return expression;
    }
    static Log(...args) {
        if (Expression.debug)
            console.log.apply(console, args);
    }
    clone() {
        let clone = new Expression();
        clone.brackets = this.brackets;
        clone._terms = clone._terms.concat(this._terms);
        return clone;
    }
    toString() {
        let str = "";
        this._terms.forEach((t, id) => {
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

/***/ "./src/expression/core/Variables.ts":
/*!******************************************!*\
  !*** ./src/expression/core/Variables.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Variables = void 0;
class Variables {
}
exports.Variables = Variables;
Variables.map = new Map([
    ['a', 0],
    ['b', 0],
    ['c', 0],
    ['d', 0],
    ['e', 0],
    ['f', 0],
    ['g', 0],
    ['h', 0],
    ['i', 0],
    ['j', 0],
    ['k', 0],
    ['l', 0],
    ['m', 0],
    ['n', 0],
    ['o', 0],
    ['p', 0],
    ['q', 0],
    ['r', 0],
    ['s', 0],
    ['t', 0],
    ['u', 0],
    ['v', 0],
    ['w', 0],
    ['x', 0],
    ['y', 0],
    ['z', 0],
    ['A', 0],
    ['B', 0],
    ['C', 0],
    ['D', 0],
    ['E', 0],
    ['F', 0],
    ['G', 0],
    ['H', 0],
    ['I', 0],
    ['J', 0],
    ['K', 0],
    ['L', 0],
    ['M', 0],
    ['N', 0],
    ['O', 0],
    ['P', 0],
    ['Q', 0],
    ['R', 0],
    ['S', 0],
    ['T', 0],
    ['U', 0],
    ['V', 0],
    ['W', 0],
    ['X', 0],
    ['Y', 0],
    ['Z', 0],
    ['pi', Math.PI],
    ['π', Math.PI],
    ['phi', (1 + Math.sqrt(5)) / 2],
    ['φ', (1 + Math.sqrt(5)) / 2]
]);


/***/ }),

/***/ "./src/expression/core/index.ts":
/*!**************************************!*\
  !*** ./src/expression/core/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Variables = exports.Expression = void 0;
var Expression_1 = __webpack_require__(/*! ./Expression */ "./src/expression/core/Expression.ts");
Object.defineProperty(exports, "Expression", ({ enumerable: true, get: function () { return Expression_1.Expression; } }));
var Variables_1 = __webpack_require__(/*! ./Variables */ "./src/expression/core/Variables.ts");
Object.defineProperty(exports, "Variables", ({ enumerable: true, get: function () { return Variables_1.Variables; } }));


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
__exportStar(__webpack_require__(/*! ./core */ "./src/expression/core/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./operators */ "./src/expression/operators/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./operands */ "./src/expression/operands/index.ts"), exports);


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
    constructor(value, brackets) {
        super(brackets);
        this.value = value;
    }
    evaluate() {
        return this.value;
    }
    toString() {
        let str = this.value.toString();
        if (this.brackets)
            str = "(" + str + ")";
        return str;
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
const core_1 = __webpack_require__(/*! ../core */ "./src/expression/core/index.ts");
class Variable extends OperandAbstract_1.OperandAbstract {
    constructor(identifier, brackets, value) {
        super(brackets);
        this.precedence = 20;
        this.identifier = identifier;
        if (value !== undefined)
            core_1.Variables.map.set(this.identifier, value);
    }
    evaluate() {
        let val = core_1.Variables.map.get(this.identifier);
        if (val == undefined)
            val = 0;
        return val;
    }
    toString() {
        let str = this.identifier.toString();
        if (this.brackets)
            str = "(" + str + ")";
        return str;
    }
}
exports.Variable = Variable;


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
        super(...arguments);
        this.names = DivideOperator.names;
        this.precedence = 13;
    }
    evaluate(left, right) {
        if (right.value == 0)
            throw new DivisionByZeroException_1.DivisionByZeroException();
        return left.value / right.value;
    }
}
exports.DivideOperator = DivideOperator;
DivideOperator.names = new Array("/");


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
        super(...arguments);
        this.names = ExponentOperator.names;
        this.precedence = 14;
    }
    evaluate(left, right) {
        return Math.pow(left.value, right.value);
    }
}
exports.ExponentOperator = ExponentOperator;
ExponentOperator.names = new Array("^");


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
        super(...arguments);
        this.names = MinusOperator.names;
        this.precedence = 12;
    }
    evaluate(left, right) {
        return left.value - right.value;
    }
}
exports.MinusOperator = MinusOperator;
MinusOperator.names = new Array("-");


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
    constructor(hidden) {
        super();
        this.names = MultiplyOperator.names;
        this.precedence = 13;
        this.hidden = false;
        this.hidden = hidden;
    }
    evaluate(left, right) {
        return left.value * right.value;
    }
    toString(nameId) {
        if (!this.hidden)
            return super.toString(nameId);
        return "";
    }
}
exports.MultiplyOperator = MultiplyOperator;
MultiplyOperator.names = new Array("*");


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
        super(...arguments);
        this.names = PlusOperator.names;
        this.precedence = 12;
    }
    evaluate(left, right) {
        return left.value + right.value;
    }
}
exports.PlusOperator = PlusOperator;
PlusOperator.names = new Array("+");


/***/ }),

/***/ "./src/expression/operators/arithmetic/index.ts":
/*!******************************************************!*\
  !*** ./src/expression/operators/arithmetic/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlusOperator = exports.MultiplyOperator = exports.MinusOperator = exports.ExponentOperator = exports.DivideOperator = void 0;
var Divide_operator_1 = __webpack_require__(/*! ./Divide.operator */ "./src/expression/operators/arithmetic/Divide.operator.ts");
Object.defineProperty(exports, "DivideOperator", ({ enumerable: true, get: function () { return Divide_operator_1.DivideOperator; } }));
var Exponent_operator_1 = __webpack_require__(/*! ./Exponent.operator */ "./src/expression/operators/arithmetic/Exponent.operator.ts");
Object.defineProperty(exports, "ExponentOperator", ({ enumerable: true, get: function () { return Exponent_operator_1.ExponentOperator; } }));
var Minus_operator_1 = __webpack_require__(/*! ./Minus.operator */ "./src/expression/operators/arithmetic/Minus.operator.ts");
Object.defineProperty(exports, "MinusOperator", ({ enumerable: true, get: function () { return Minus_operator_1.MinusOperator; } }));
var Multiply_operator_1 = __webpack_require__(/*! ./Multiply.operator */ "./src/expression/operators/arithmetic/Multiply.operator.ts");
Object.defineProperty(exports, "MultiplyOperator", ({ enumerable: true, get: function () { return Multiply_operator_1.MultiplyOperator; } }));
var Plus_operator_1 = __webpack_require__(/*! ./Plus.operator */ "./src/expression/operators/arithmetic/Plus.operator.ts");
Object.defineProperty(exports, "PlusOperator", ({ enumerable: true, get: function () { return Plus_operator_1.PlusOperator; } }));


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
        this.names = AndOperator.names;
        this.precedence = 8;
    }
    evaluate(left, right) {
        return left.value & right.value;
    }
}
exports.AndOperator = AndOperator;
AndOperator.names = new Array("&");


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
        this.names = OrOperator.names;
        this.precedence = 6;
    }
    evaluate(left, right) {
        return left.value | right.value;
    }
}
exports.OrOperator = OrOperator;
OrOperator.names = new Array("|");


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
        this.names = XorOperator.names;
        this.precedence = 7;
    }
    evaluate(left, right) {
        return left.value ^ right.value;
    }
}
exports.XorOperator = XorOperator;
XorOperator.names = new Array("||");


/***/ }),

/***/ "./src/expression/operators/bitwise/index.ts":
/*!***************************************************!*\
  !*** ./src/expression/operators/bitwise/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XorOperator = exports.OrOperator = exports.AndOperator = void 0;
var And_operator_1 = __webpack_require__(/*! ./And.operator */ "./src/expression/operators/bitwise/And.operator.ts");
Object.defineProperty(exports, "AndOperator", ({ enumerable: true, get: function () { return And_operator_1.AndOperator; } }));
var Or_operator_1 = __webpack_require__(/*! ./Or.operator */ "./src/expression/operators/bitwise/Or.operator.ts");
Object.defineProperty(exports, "OrOperator", ({ enumerable: true, get: function () { return Or_operator_1.OrOperator; } }));
var Xor_operator_1 = __webpack_require__(/*! ./Xor.operator */ "./src/expression/operators/bitwise/Xor.operator.ts");
Object.defineProperty(exports, "XorOperator", ({ enumerable: true, get: function () { return Xor_operator_1.XorOperator; } }));


/***/ }),

/***/ "./src/expression/operators/function/Cos.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Cos.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CosOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class CosOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = CosOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.cos(result);
    }
}
exports.CosOperator = CosOperator;
CosOperator.names = new Array("cos");


/***/ }),

/***/ "./src/expression/operators/function/Ln.operator.ts":
/*!**********************************************************!*\
  !*** ./src/expression/operators/function/Ln.operator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LnOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class LnOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = LnOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.log(result);
    }
}
exports.LnOperator = LnOperator;
LnOperator.names = new Array("ln");


/***/ }),

/***/ "./src/expression/operators/function/Log.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Log.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class LogOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = LogOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.log10(result);
    }
}
exports.LogOperator = LogOperator;
LogOperator.names = new Array("log");


/***/ }),

/***/ "./src/expression/operators/function/Sin.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Sin.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SinOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class SinOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = SinOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.sin(result);
    }
}
exports.SinOperator = SinOperator;
SinOperator.names = new Array("sin");


/***/ }),

/***/ "./src/expression/operators/function/SquareRoot.operator.ts":
/*!******************************************************************!*\
  !*** ./src/expression/operators/function/SquareRoot.operator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SquareRootOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class SquareRootOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = SquareRootOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.sqrt(result);
    }
}
exports.SquareRootOperator = SquareRootOperator;
SquareRootOperator.names = new Array("sqrt", "√");


/***/ }),

/***/ "./src/expression/operators/function/Tan.operator.ts":
/*!***********************************************************!*\
  !*** ./src/expression/operators/function/Tan.operator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TanOperator = void 0;
const OperatorFunctionAbstract_1 = __webpack_require__(/*! ../../abstract/OperatorFunctionAbstract */ "./src/expression/abstract/OperatorFunctionAbstract.ts");
class TanOperator extends OperatorFunctionAbstract_1.OperatorFunctionAbstract {
    constructor() {
        super(...arguments);
        this.names = TanOperator.names;
    }
    evaluate(param) {
        const result = param.evaluate();
        return Math.tan(result);
    }
}
exports.TanOperator = TanOperator;
TanOperator.names = new Array("tan");


/***/ }),

/***/ "./src/expression/operators/function/index.ts":
/*!****************************************************!*\
  !*** ./src/expression/operators/function/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TanOperator = exports.SquareRootOperator = exports.SinOperator = exports.LogOperator = exports.LnOperator = exports.CosOperator = void 0;
var Cos_operator_1 = __webpack_require__(/*! ./Cos.operator */ "./src/expression/operators/function/Cos.operator.ts");
Object.defineProperty(exports, "CosOperator", ({ enumerable: true, get: function () { return Cos_operator_1.CosOperator; } }));
var Ln_operator_1 = __webpack_require__(/*! ./Ln.operator */ "./src/expression/operators/function/Ln.operator.ts");
Object.defineProperty(exports, "LnOperator", ({ enumerable: true, get: function () { return Ln_operator_1.LnOperator; } }));
var Log_operator_1 = __webpack_require__(/*! ./Log.operator */ "./src/expression/operators/function/Log.operator.ts");
Object.defineProperty(exports, "LogOperator", ({ enumerable: true, get: function () { return Log_operator_1.LogOperator; } }));
var Sin_operator_1 = __webpack_require__(/*! ./Sin.operator */ "./src/expression/operators/function/Sin.operator.ts");
Object.defineProperty(exports, "SinOperator", ({ enumerable: true, get: function () { return Sin_operator_1.SinOperator; } }));
var SquareRoot_operator_1 = __webpack_require__(/*! ./SquareRoot.operator */ "./src/expression/operators/function/SquareRoot.operator.ts");
Object.defineProperty(exports, "SquareRootOperator", ({ enumerable: true, get: function () { return SquareRoot_operator_1.SquareRootOperator; } }));
var Tan_operator_1 = __webpack_require__(/*! ./Tan.operator */ "./src/expression/operators/function/Tan.operator.ts");
Object.defineProperty(exports, "TanOperator", ({ enumerable: true, get: function () { return Tan_operator_1.TanOperator; } }));


/***/ }),

/***/ "./src/expression/operators/index.ts":
/*!*******************************************!*\
  !*** ./src/expression/operators/index.ts ***!
  \*******************************************/
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
__exportStar(__webpack_require__(/*! ./arithmetic */ "./src/expression/operators/arithmetic/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./bitwise */ "./src/expression/operators/bitwise/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./function */ "./src/expression/operators/function/index.ts"), exports);


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
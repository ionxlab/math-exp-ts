"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Expression = void 0;
var OperatorAbstract_1 = require("../abstract/OperatorAbstract");
var OperandAbstract_1 = require("../abstract/OperandAbstract");
var TermAbstract_1 = require("../abstract/TermAbstract");
var OperatorLeftRightAbstract_1 = require("../abstract/OperatorLeftRightAbstract");
var OperatorFunctionAbstract_1 = require("../abstract/OperatorFunctionAbstract");
var operands_1 = require("../operands");
var MissingTermException_1 = require("../../exceptions/MissingTermException");
var MissingOperandException_1 = require("../../exceptions/MissingOperandException");
var EmptyExpressionException_1 = require("../../exceptions/EmptyExpressionException");
var Expression = /** @class */ (function (_super) {
    __extends(Expression, _super);
    function Expression() {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.precedence = 19;
        _this._brackets = true;
        _this._terms = new Array();
        if (terms !== undefined)
            _this._terms = _this._terms.concat(terms);
        return _this;
    }
    Object.defineProperty(Expression.prototype, "terms", {
        get: function () {
            return this._terms;
        },
        set: function (value) {
            this._terms = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Expression.prototype, "brackets", {
        get: function () {
            return this._brackets;
        },
        set: function (active) {
            this._brackets = active;
        },
        enumerable: false,
        configurable: true
    });
    Expression.prototype.evaluate = function () {
        // check terms
        if (this._terms.length == 0)
            throw new EmptyExpressionException_1.EmptyExpressionException();
        Expression.Log("Evaluating:", this.toString());
        // make a clone for editing
        var temp = this.clone();
        var _loop_1 = function () {
            var highest = -1;
            var highestId = -1;
            // iterate over all terms and evaluate highest precedence
            temp._terms.forEach(function (t, id) {
                if (t.precedence > highest) {
                    highest = t.precedence;
                    highestId = id;
                }
            });
            Expression.evaluateTerm(temp, highestId);
            Expression.Log("Temporary expression:", temp.toString());
        };
        // loop until one constant is left
        while (temp._terms.length > 1 || !(temp._terms[0] instanceof operands_1.Constant)) {
            _loop_1();
        }
        return temp._terms[0].evaluate();
    };
    Expression.evaluateTerm = function (expression, index) {
        var term = expression._terms[index];
        Expression.Log("Evaluating Term:", term.toString());
        var value = 0;
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
                var left = expression._terms[index - 1];
                var right = expression._terms[index + 1];
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
                var param = expression._terms[index + 1];
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
    };
    Expression.Log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Expression.debug)
            console.log.apply(console, args);
    };
    Expression.prototype.clone = function () {
        var clone = new Expression();
        clone.brackets = this.brackets;
        clone._terms = clone._terms.concat(this._terms);
        return clone;
    };
    Expression.prototype.toString = function () {
        var str = "";
        this._terms.forEach(function (t, id) {
            str += t.toString();
        });
        if (this.brackets)
            str = "(" + str + ")";
        return str;
    };
    Expression.debug = true;
    return Expression;
}(TermAbstract_1.TermAbstract));
exports.Expression = Expression;

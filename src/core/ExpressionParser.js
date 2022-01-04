"use strict";
exports.__esModule = true;
exports.ExpressionParser = void 0;
var expression_1 = require("../expression");
var expression_2 = require("../expression");
var Operators = require("../expression/operators");
var BracketsMissmatchException_1 = require("../exceptions/BracketsMissmatchException");
var EmptyExpressionStringException_1 = require("../exceptions/EmptyExpressionStringException");
var UndefinedExpressionStringException_1 = require("../exceptions/UndefinedExpressionStringException");
var ParserException_1 = require("../exceptions/ParserException");
var OperatorKeys = Object.keys(Operators);
var ExpressionParser = /** @class */ (function () {
    function ExpressionParser(expressionStr) {
        this.expressionStr = expressionStr;
    }
    ExpressionParser.prototype.setExpressionStr = function (expressionStr) {
        this.expressionStr = expressionStr;
    };
    ExpressionParser.prototype.parse = function (expressionStr) {
        if (expressionStr !== undefined)
            this.setExpressionStr(expressionStr);
        // check expression string
        if (!this.expressionStr)
            throw new UndefinedExpressionStringException_1.UndefinedExpressionStringException();
        if (this.expressionStr == "")
            throw new EmptyExpressionStringException_1.EmptyExpressionStringException();
        // parse all elements from expression string
        var matches = this.expressionStr.match(/[a-z0-9]+|[+\-*\/()^]|[&|]+/gi);
        // check number of brackets
        var leftBrackets = matches.filter(function (value) { return value == '('; });
        var rightBrackets = matches.filter(function (value) { return value == ')'; });
        if (leftBrackets.length !== rightBrackets.length)
            throw new BracketsMissmatchException_1.BracketsMissmatchException();
        // create a depth array for nested expressions
        var exp = new expression_1.Expression();
        var expStack = new Array();
        expStack.push(exp);
        // iterate over all expression term elements
        matches.forEach(function (elem, index) {
            var currentExp = expStack[expStack.length - 1];
            // parse elem and return a TermAbstract
            var term = ExpressionParser.parseElem(elem, currentExp);
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
    };
    ExpressionParser.parseElem = function (elem, currentExpression) {
        var term;
        // if elem matches a numerical constant [0-9]+
        var match = elem.match(/^[0-9]+$/i);
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
            for (var _i = 0, OperatorKeys_1 = OperatorKeys; _i < OperatorKeys_1.length; _i++) {
                var key = OperatorKeys_1[_i];
                var Operator = Operators[key];
                // iterate over all operator names
                for (var _a = 0, _b = Operator.names; _a < _b.length; _a++) {
                    var name_1 = _b[_a];
                    // if name matches, return the constructed operator
                    if (name_1 === match[2]) {
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
    };
    return ExpressionParser;
}());
exports.ExpressionParser = ExpressionParser;

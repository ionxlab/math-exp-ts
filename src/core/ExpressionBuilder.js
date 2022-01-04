"use strict";
exports.__esModule = true;
exports.ExpressionBuilder = void 0;
var expression_1 = require("../expression");
var ExpressionBuilder = /** @class */ (function () {
    function ExpressionBuilder() {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        this.expression = new expression_1.Expression();
        this.expression.terms = this.expression.terms.concat(terms);
        this.expression.brackets = false;
    }
    ExpressionBuilder.prototype.add = function (term, index) {
        if (index !== undefined)
            this.expression.terms.splice(index, 0, term);
        else
            this.expression.terms.push(term);
        return this.expression.terms.length;
    };
    ExpressionBuilder.prototype.addAll = function () {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        this.expression.terms = this.expression.terms.concat(terms);
    };
    ExpressionBuilder.prototype.remove = function (index) {
        if (index >= 0 && index < this.expression.terms.length)
            this.expression.terms.splice(index, 1);
        return this.expression;
    };
    ExpressionBuilder.prototype.getExpression = function () {
        return this.expression;
    };
    ExpressionBuilder.prototype.clear = function () {
        this.expression.terms = [];
    };
    return ExpressionBuilder;
}());
exports.ExpressionBuilder = ExpressionBuilder;

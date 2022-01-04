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
exports.SquareRootOperator = void 0;
var OperatorFunctionAbstract_1 = require("../../abstract/OperatorFunctionAbstract");
var SquareRootOperator = /** @class */ (function (_super) {
    __extends(SquareRootOperator, _super);
    function SquareRootOperator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = SquareRootOperator.names;
        return _this;
    }
    SquareRootOperator.prototype.evaluate = function (param) {
        var result = param.evaluate();
        return Math.sqrt(result);
    };
    SquareRootOperator.names = new Array("sqrt", "√");
    return SquareRootOperator;
}(OperatorFunctionAbstract_1.OperatorFunctionAbstract));
exports.SquareRootOperator = SquareRootOperator;

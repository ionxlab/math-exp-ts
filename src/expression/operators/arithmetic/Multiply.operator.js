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
exports.MultiplyOperator = void 0;
var OperatorLeftRightAbstract_1 = require("../../abstract/OperatorLeftRightAbstract");
var MultiplyOperator = /** @class */ (function (_super) {
    __extends(MultiplyOperator, _super);
    function MultiplyOperator(hidden) {
        var _this = _super.call(this) || this;
        _this.names = MultiplyOperator.names;
        _this.precedence = 13;
        _this.hidden = false;
        _this.hidden = hidden;
        return _this;
    }
    MultiplyOperator.prototype.evaluate = function (left, right) {
        return left.value * right.value;
    };
    MultiplyOperator.prototype.toString = function (nameId) {
        if (!this.hidden)
            return _super.prototype.toString.call(this, nameId);
        return "";
    };
    MultiplyOperator.names = new Array("*");
    return MultiplyOperator;
}(OperatorLeftRightAbstract_1.OperatorLeftRightAbstract));
exports.MultiplyOperator = MultiplyOperator;

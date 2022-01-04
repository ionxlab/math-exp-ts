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
exports.CosOperator = void 0;
var OperatorFunctionAbstract_1 = require("../../abstract/OperatorFunctionAbstract");
var CosOperator = /** @class */ (function (_super) {
    __extends(CosOperator, _super);
    function CosOperator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = CosOperator.names;
        return _this;
    }
    CosOperator.prototype.evaluate = function (param) {
        var result = param.evaluate();
        return Math.cos(result);
    };
    CosOperator.names = new Array("cos");
    return CosOperator;
}(OperatorFunctionAbstract_1.OperatorFunctionAbstract));
exports.CosOperator = CosOperator;

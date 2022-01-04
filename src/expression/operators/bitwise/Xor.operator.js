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
exports.XorOperator = void 0;
var OperatorLeftRightAbstract_1 = require("../../abstract/OperatorLeftRightAbstract");
var XorOperator = /** @class */ (function (_super) {
    __extends(XorOperator, _super);
    function XorOperator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = XorOperator.names;
        _this.precedence = 7;
        return _this;
    }
    XorOperator.prototype.evaluate = function (left, right) {
        return left.value ^ right.value;
    };
    XorOperator.names = new Array("||");
    return XorOperator;
}(OperatorLeftRightAbstract_1.OperatorLeftRightAbstract));
exports.XorOperator = XorOperator;

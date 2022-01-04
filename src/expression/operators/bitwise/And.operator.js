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
exports.AndOperator = void 0;
var OperatorLeftRightAbstract_1 = require("../../abstract/OperatorLeftRightAbstract");
var AndOperator = /** @class */ (function (_super) {
    __extends(AndOperator, _super);
    function AndOperator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = AndOperator.names;
        _this.precedence = 8;
        return _this;
    }
    AndOperator.prototype.evaluate = function (left, right) {
        return left.value & right.value;
    };
    AndOperator.names = new Array("&");
    return AndOperator;
}(OperatorLeftRightAbstract_1.OperatorLeftRightAbstract));
exports.AndOperator = AndOperator;

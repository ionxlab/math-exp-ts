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
exports.Variable = void 0;
var OperandAbstract_1 = require("../abstract/OperandAbstract");
var core_1 = require("../core");
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    function Variable(identifier, brackets, value) {
        var _this = _super.call(this, brackets) || this;
        _this.precedence = 20;
        _this.identifier = identifier;
        if (value !== undefined)
            core_1.Variables.map.set(_this.identifier, value);
        return _this;
    }
    Variable.prototype.evaluate = function () {
        var val = core_1.Variables.map.get(this.identifier);
        if (val == undefined)
            val = 0;
        return val;
    };
    Variable.prototype.toString = function () {
        var str = this.identifier.toString();
        if (this.brackets)
            str = "(" + str + ")";
        return str;
    };
    return Variable;
}(OperandAbstract_1.OperandAbstract));
exports.Variable = Variable;

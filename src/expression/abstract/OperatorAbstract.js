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
exports.OperatorAbstract = void 0;
var TermAbstract_1 = require("./TermAbstract");
var OperatorAbstract = /** @class */ (function (_super) {
    __extends(OperatorAbstract, _super);
    function OperatorAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperatorAbstract.prototype.toString = function (nameId) {
        var id = 0;
        if (nameId !== undefined && nameId >= 0 && nameId < this.names.length)
            id = 0;
        return this.names[id];
    };
    ;
    return OperatorAbstract;
}(TermAbstract_1.TermAbstract));
exports.OperatorAbstract = OperatorAbstract;

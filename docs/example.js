"use strict";
exports.__esModule = true;
var math_exp_ts_1 = require("math-exp-ts");
// Measure elapsed time of a lambda function
function chrono(lambda) {
    var before = Date.now();
    lambda();
    var after = Date.now();
    var diff = after - before;
    console.log("Evaluated in:", diff, "ms");
}
// Configure static properties
math_exp_ts_1.Variables.map.set('A', 9);
//Expression.debug = true;
console.log("------------------------------------------------------------------");
chrono(function () {
    var builder = new math_exp_ts_1.ExpressionBuilder(new math_exp_ts_1.Constant(2), new math_exp_ts_1.PlusOperator(), new math_exp_ts_1.Constant(2), new math_exp_ts_1.MultiplyOperator(), new math_exp_ts_1.Variable('A'));
    var value = builder.getExpression().evaluate();
    console.log("Expression:", builder.getExpression().toString());
    console.log("Variable: 'A'=", math_exp_ts_1.Variables.map.get('A'));
    console.log("Value:", value);
});
console.log("------------------------------------------------------------------");
chrono(function () {
    var builder = new math_exp_ts_1.ExpressionBuilder(new math_exp_ts_1.Expression(new math_exp_ts_1.Constant(2), new math_exp_ts_1.PlusOperator(), new math_exp_ts_1.Constant(2)), new math_exp_ts_1.MultiplyOperator(), new math_exp_ts_1.Variable('A'));
    var value = builder.getExpression().evaluate();
    console.log("Expression:", builder.getExpression().toString());
    console.log("Variable: 'A'=", math_exp_ts_1.Variables.map.get('A'));
    console.log("Value:", value);
});
console.log("------------------------------------------------------------------");
chrono(function () {
    var builder = new math_exp_ts_1.ExpressionBuilder(new math_exp_ts_1.SquareRootOperator(), new math_exp_ts_1.Variable('A', true));
    var value = builder.getExpression().evaluate();
    console.log("Expression:", builder.getExpression().toString());
    console.log("Variable: 'A'=", math_exp_ts_1.Variables.map.get('A'));
    console.log("Value:", value);
});
console.log("------------------------------------------------------------------");
chrono(function () {
    var builder = new math_exp_ts_1.ExpressionBuilder(new math_exp_ts_1.Constant(2), new math_exp_ts_1.Expression(new math_exp_ts_1.Constant(2), new math_exp_ts_1.PlusOperator(), new math_exp_ts_1.Constant(2), new math_exp_ts_1.MultiplyOperator(), new math_exp_ts_1.Expression(new math_exp_ts_1.Constant(4), new math_exp_ts_1.MinusOperator(), new math_exp_ts_1.Constant(2), new math_exp_ts_1.MultiplyOperator(), new math_exp_ts_1.Variable('A'))));
    var value = builder.getExpression().evaluate();
    console.log("Expression:", builder.getExpression().toString());
    console.log("Variable: 'A'=", math_exp_ts_1.Variables.map.get('A'));
    console.log("Value:", value);
});
console.log("------------------------------------------------------------------");

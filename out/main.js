"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddOperation_1 = require("./AddOperation");
var MultiflyOperation_1 = require("./MultiflyOperation");
var SubstractOperation_1 = require("./SubstractOperation");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var firstNumber = 100;
var secondNumber = 90;
var operations = [new AddOperation_1.default(), new SubstractOperation_1.default(), new MultiflyOperation_1.default()];
for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
    var operation = operations_1[_i];
    operation.firstNumber = firstNumber;
    operation.secondNumber = secondNumber;
    operation.operator();
}
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
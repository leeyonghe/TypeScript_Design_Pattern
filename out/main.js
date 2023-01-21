"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddOperationBuilder_1 = require("./AddOperationBuilder");
var MultiflyOperationBuilder_1 = require("./MultiflyOperationBuilder");
var OperationDirector_1 = require("./OperationDirector");
var SubstractAddOperationBuilder_1 = require("./SubstractAddOperationBuilder");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var firstNumber = 100;
var secondNumber = 90;
var operationBuilder = new Array();
operationBuilder.push(new AddOperationBuilder_1.default(firstNumber, secondNumber));
operationBuilder.push(new SubstractAddOperationBuilder_1.default(firstNumber, secondNumber));
operationBuilder.push(new MultiflyOperationBuilder_1.default(firstNumber, secondNumber));
for (var _i = 0, operationBuilder_1 = operationBuilder; _i < operationBuilder_1.length; _i++) {
    var builder = operationBuilder_1[_i];
    var operationDirector = new OperationDirector_1.default(builder);
    operationDirector.construct();
}
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
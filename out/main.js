"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntergerOperationFactory_1 = require("./IntergerOperationFactory");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var firstNumer = "10.2";
var secondNumber = "20.3";
var operationFactory = new IntergerOperationFactory_1.default();
var operationProduct = operationFactory.createOperationProduct();
var firstNumberOperandProduct = operationFactory.createNumberOperandProduct(firstNumer);
var secondNumberOperandProduct = operationFactory.createNumberOperandProduct(secondNumber);
operationProduct.firstNumberOperandProduct = firstNumberOperandProduct;
operationProduct.secondNumberOperandProduct = secondNumberOperandProduct;
operationProduct.print();
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
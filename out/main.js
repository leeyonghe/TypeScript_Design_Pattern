"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddOperationHandler_1 = require("./AddOperationHandler");
const MultiplyOperationHandler_1 = require("./MultiplyOperationHandler");
const SubstractOperationHandler_1 = require("./SubstractOperationHandler");
const Request_1 = require("./Request");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
let addOperationHandler = new AddOperationHandler_1.default("+");
let subStractOperationHandler = new SubstractOperationHandler_1.default("-");
let multiplyOperationHandler = new MultiplyOperationHandler_1.default("*");
addOperationHandler.setNext(subStractOperationHandler).setNext(multiplyOperationHandler);
let requests = [new Request_1.default("100+90"), new Request_1.default("100-90"), new Request_1.default("100*90")];
let obj = addOperationHandler;
let index = 0;
do {
    let answer = obj.handleRequest(requests[index]);
    let expression = requests[index].expression;
    console.log(expression + " = " + answer);
    index++;
} while ((obj = obj.getNext()) != null);
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
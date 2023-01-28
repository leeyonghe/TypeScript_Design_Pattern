"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const PrintAnswer_1 = require("./PrintAnswer");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
let client = new Client_1.default();
client.setupTextStyleFlyweightFactory();
let printAswner = new PrintAnswer_1.default();
printAswner.firstNumber = 100;
printAswner.secondNumber = 90;
printAswner.printResult();
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
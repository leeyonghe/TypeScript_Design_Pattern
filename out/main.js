"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./Client");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var client = new Client_1.default();
var firstNumber = 100;
var secondNumber = 90;
var opertors = ["+", "-", "*"];
for (var _i = 0, opertors_1 = opertors; _i < opertors_1.length; _i++) {
    var key = opertors_1[_i];
    client.setOperation(key, firstNumber, secondNumber);
    client.operate();
}
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
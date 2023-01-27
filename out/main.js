"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcuratorFacade_1 = require("./CalcuratorFacade");
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var calculateFacade = new CalcuratorFacade_1.default();
var expression = ["100+90", "100-90", "100*90", "100/90"];
for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
    var ex = expression_1[_i];
    calculateFacade.calculate(ex);
}
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
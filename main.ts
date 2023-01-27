import CalcuratorFacade from "./CalcuratorFacade";
import ExpressionParser from "./ExpressionParser";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let calculateFacade = new CalcuratorFacade();

let expression : string[] = ["100+90","100-90","100*90","100/90"];

for (const ex of expression) {
    calculateFacade.calculate(ex);
}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
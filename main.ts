import BaseOperation from "./BaseOperation";
import RefinedAbastractOperation from "./RefinedAbastrctOperation";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber = 100;
let secondNumber = 90;

let baseOperation = new BaseOperation();

let operationAbstract = new RefinedAbastractOperation(baseOperation);

operationAbstract.add(firstNumber, secondNumber);

operationAbstract.substract(firstNumber, secondNumber);

operationAbstract.multiply(firstNumber, secondNumber);

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
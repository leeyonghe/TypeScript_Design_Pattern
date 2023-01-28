import AbstractOperationSubject from "./AbstractOperationSubject";
import AddOperationSubject from "./AddOperationSubject";
import DivideOperationSubject from "./DivideOperationSubject";
import MuliplyOperationSubject from "./MuliplyOperationSubject";
import SubstractOperationSubject from "./SubstractOperationSubject";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber = 100;
let secondNumber = 90;

let operationSubject : AbstractOperationSubject = new AddOperationSubject();

let result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " + " + secondNumber + " = " + result);

operationSubject = new SubstractOperationSubject();

result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " - " + secondNumber + " = " + result);

operationSubject = new MuliplyOperationSubject();

result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " * " + secondNumber + " = " + result);

operationSubject = new DivideOperationSubject();

result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " / " + secondNumber + " = " + result);


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
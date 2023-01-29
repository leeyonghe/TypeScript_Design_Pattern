import AddOperationObserver from "./AddOperationObserver";
import DivideOperationObserver from "./DivideOperationObserver";
import MultiplyOperationObserver from "./MultiplyOperationObserver";
import OperationSubject from "./OperationSubject";
import SubstractOperationObserver from "./SubstractOperationObserver";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let operationSubject = new OperationSubject();

let addObserver = new AddOperationObserver(operationSubject);
let substractObserver = new SubstractOperationObserver(operationSubject);
let multiplyObserver = new MultiplyOperationObserver(operationSubject);
let divideObserver = new DivideOperationObserver(operationSubject);

operationSubject.registerObservers(addObserver);
operationSubject.registerObservers(substractObserver);
operationSubject.registerObservers(multiplyObserver);
operationSubject.registerObservers(divideObserver);

let firstNumber = 100;
let secondNumber = 90;

operationSubject.setNumber(firstNumber, secondNumber);

firstNumber = 80;
secondNumber = 20;

operationSubject.setNumber(firstNumber, secondNumber);


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
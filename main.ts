import AddOperation from "./AddOperation";
import DivideOperationAdapter from "./DivideOperationAdapter";
import MultiflyOpeation from "./MultiflyOperation";
import OperationAdaptee from "./OperationAdaptee";
import SubstractOperation from "./SubstractOperation";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber : number = 100;
let secondNumber : number = 90;

let add = new AddOperation();

let answer = add.operate(firstNumber, secondNumber);

add.print();

let muliply = new MultiflyOpeation();

answer = muliply.operate(firstNumber, secondNumber);

muliply.print();

let substract = new SubstractOperation();

answer = substract.operate(firstNumber, secondNumber);

substract.print();

let adaptee = new OperationAdaptee();

let adpater = new DivideOperationAdapter(adaptee);

answer = adpater.operate(firstNumber, secondNumber);

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
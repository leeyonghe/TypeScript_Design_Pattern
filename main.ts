import AddOperation from "./AddOperation";
import DivideOperation from "./DivideOperation";
import MultiplyOperation from "./MultiplyOperation";
import SubstractOperation from "./SubstractOperation";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber = 100;
let secondNumber = 90;

let operations = [
    new AddOperation(),
    new SubstractOperation(),
    new MultiplyOperation(),
    new DivideOperation()
];

for (const operation of operations) {
    operation.firstNumber = firstNumber;
    operation.secondNumber = secondNumber;
    operation.operate();
}


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
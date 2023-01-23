import AbstractOperation from "./AbstractOperation";
import AddOperation from "./AddOperation";
import MultiflyOperation from "./MultiflyOperation";
import SubstractOperation from "./SubstractOperation";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));


let firstNumber = 100;
let secondNumber = 90;

let operations = [new AddOperation(), new SubstractOperation(), new MultiflyOperation()];

for (const operation of operations) {
    operation.firstNumber = firstNumber;
    operation.secondNumber = secondNumber;
    operation.operator();
}


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
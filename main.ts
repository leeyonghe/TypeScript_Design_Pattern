import AbstractOperationStrategy from "./AbstractOperationStrategy";
import AddOperationStrategy from "./AddOperationStrategy";
import DivideOperationStrategy from "./DivideOperationStrategy";
import MultiplyOperationStrategy from "./MultiplyOperationStrategy";
import OperationContext from "./OperationContext";
import SubstractOperationStrategy from "./SubstractOperationStrategy";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let context = new OperationContext();

let firstNumber = 100;
let secondNumber = 90;

let operationStrategey : AbstractOperationStrategy[] = [
    new AddOperationStrategy(),
    new SubstractOperationStrategy(),
    new MultiplyOperationStrategy(),
    new DivideOperationStrategy()
];

for (const strategy of operationStrategey) {

    context.operationStrategy = strategy;

    context.operate(firstNumber, secondNumber);

}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
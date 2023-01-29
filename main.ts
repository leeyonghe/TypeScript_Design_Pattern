import AddOperation from "./AddOperation";
import OperationAggregate from "./OperationAggregate";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let operationAggregate = new OperationAggregate();

operationAggregate.addOperation(new AddOperation());

let firstNumber = 100;
let secondNumber = 90;


let calcIterator = operationAggregate.createIterator();

while(calcIterator.hasNext()){
    let operation = calcIterator.Next();
    operation.print(firstNumber, secondNumber);
}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
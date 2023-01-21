import AbstractOperationBuilder from "./AbstractOperationBuilder";
import AddOperationBuilder from "./AddOperationBuilder";
import MultiflyOperationBuilder from "./MultiflyOperationBuilder";
import OperationDirector from "./OperationDirector";
import SubstractAddOperationBuilder from "./SubstractAddOperationBuilder";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber = 100;
let secondNumber = 90;

let operationBuilder = new Array();

operationBuilder.push(new AddOperationBuilder(firstNumber, secondNumber));
operationBuilder.push(new SubstractAddOperationBuilder(firstNumber, secondNumber));
operationBuilder.push(new MultiflyOperationBuilder(firstNumber, secondNumber));

for (const builder of operationBuilder) {

    let operationDirector : OperationDirector = new OperationDirector(builder);
    operationDirector.construct();

}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
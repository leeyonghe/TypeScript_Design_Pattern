import AbstractOperationBuilder from "./AbstractOperationBuilder";
import AddOperationBuilder from "./AddOperationBuilder";
import MultiflyOperationBuilder from "./MultiflyOperationBuilder";
import OperationDirector from "./OperationDirector";
import SubstractAddOperationBuilder from "./SubstractAddOperationBuilder";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let firstNumber = 100;
let secondNumber = 90;

let operationDirector : OperationDirector = null;
let operationBuilder = [];

operationBuilder[0] = new AddOperationBuilder(firstNumber, secondNumber);
operationBuilder[1] = new SubstractAddOperationBuilder(firstNumber, secondNumber);
operationBuilder[2] = new MultiflyOperationBuilder(firstNumber, secondNumber);

for (const builder of operationBuilder) {

    operationDirector = new OperationDirector(builder);
    operationDirector.construct();

}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
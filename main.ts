import OperationMemento from "./OperationMemento";
import OperationOriginator from "./OperationOriginator";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let operationOriginator = new OperationOriginator();

operationOriginator.firstNumber = 100;
operationOriginator.secondNumber = 90;

operationOriginator.printOperation();

let operationMemento = operationOriginator.createMemento();

operationMemento.firstNumber = 60;
operationMemento.secondNumber = 40;

operationOriginator.setMemento(operationMemento);

operationOriginator.printOperation();




console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
import AddOperationExpression from "./AddOperationExpression";
import Calculator from "./Calculator";
import NumberExpression from "./NumberExpression";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let calculator = new Calculator();

let firstNumber = 100;
let secondNumber = 90;

let firstNumberEquation = new NumberExpression(firstNumber);

calculator.setExpression(firstNumberEquation);

console.log(calculator.calculate());

let secondNumberEquation = new NumberExpression(secondNumber);

calculator.setExpression(secondNumberEquation);

console.log(calculator.calculate());

let addOperationExpression = new AddOperationExpression();

addOperationExpression.pushOperandExpression(firstNumberEquation);
addOperationExpression.pushOperandExpression(secondNumberEquation);

calculator.setExpression(addOperationExpression);

console.log(firstNumber + " + " + secondNumber + " = " + calculator.calculate());


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
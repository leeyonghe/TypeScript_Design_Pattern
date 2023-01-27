import AddOperationExpress from "./AddOperationExpress";
import Calcurator from "./Calculator";
import FracDecoratorExpression from "./FracDecoratorExpression";
import NumberExpression from "./NumberExpression";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

const calcurator = new Calcurator();

let firstNumber = 100;
let secondNumber = 90;

let firstNumberExpression = new NumberExpression(firstNumber);
let secondNumberExpression = new NumberExpression(secondNumber);

let addOperationExrepssion = new AddOperationExpress();
addOperationExrepssion.pushOperandExpression(firstNumberExpression);
addOperationExrepssion.pushOperandExpression(secondNumberExpression);

calcurator.expression = addOperationExrepssion;

calcurator.expression = new FracDecoratorExpression(addOperationExrepssion);

console.log("FRAC("+firstNumber + " + " + secondNumber + ') = ' + calcurator.calculate());

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
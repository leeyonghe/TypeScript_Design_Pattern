import AddOperationExpression from "./AddOperationExpression";
import Calcurator from "./Calcurator";
import NumberExpression from "./NumberExpression";
import VariableExpression from "./VariableExpression";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let cal = new Calcurator();

let firstNumber = 100;

let firstNumberEquation = new NumberExpression(firstNumber);

let secondNumberEquation = new VariableExpression("ABC");

let addOperationExpression = new AddOperationExpression();
addOperationExpression.addOperandExpression(firstNumberEquation);
addOperationExpression.addOperandExpression(secondNumberEquation);

cal.expression = addOperationExpression;

let variable = "ABC";
let value = 80;

cal.addVariableToValue(variable, value);

console.log("100 + ABC = "+ cal.calcurate());

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
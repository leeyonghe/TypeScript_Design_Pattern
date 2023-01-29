import CalcContext from "./CalcContext";
import CalcExpressionFactory from "./CalcExpressionFactory";
import CalcToken from "./CalcToken";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));



let text = "ADD(2,12)";
let calcContext = new CalcContext(text);

let result = 0;
let currentToken : CalcToken = calcContext.getCurrentTokenAndToNext();

console.log("currentToken token : "+currentToken.token);
console.log("currentToken type : "+currentToken.type);

let expression = CalcExpressionFactory.getInstance().createExpression(currentToken);

if (expression != null) {
    expression.parse(calcContext);
    result = expression.operate();
}

console.log(text + " = " + result);

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
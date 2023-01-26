import AbstractExpression from "./AbstractExpression";

class Calculator {

    private expression : AbstractExpression;

    constructor(){

    }

    calculate() : number{
        return this.expression.operate();
    }

    setExpression(expression : AbstractExpression) : void{
        this.expression = expression;
    }

}

export default Calculator;
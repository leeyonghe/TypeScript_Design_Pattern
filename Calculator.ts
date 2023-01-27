import AbstractExpression from "./AbstractExpression";

class Calcurator {

    private _expression : AbstractExpression;

    calculate() : number{
        return this._expression.operate();
    }

    set expression(expression : AbstractExpression){
        this._expression = expression;
    }

    get expression(){
        return this._expression;
    }
    
}

export default Calcurator;
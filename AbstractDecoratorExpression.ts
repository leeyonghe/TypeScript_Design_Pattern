import AbstractExpression from "./AbstractExpression";

abstract class AbstractDecoratorExpression extends AbstractExpression{

    protected _expression : AbstractExpression;

    constructor(expression : AbstractExpression){
        super();
        this._expression = expression;
    }

    get expression(){
        return this._expression;
    }

    set expression(expression : AbstractExpression){
        this._expression = expression;
    }

}

export default AbstractDecoratorExpression;
import AbstractExpression from "./AbstractExpression";

abstract class AbstractFunctionExpression extends AbstractExpression{

    constructor(){
        super();
    }

    protected abstract getFunctionName() : string;

}

export default AbstractFunctionExpression;
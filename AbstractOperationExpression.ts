import AbstractExpression from "./AbstractExpression";

abstract class AbstractOperationExpression extends AbstractExpression{

    protected operandList : AbstractExpression[] = [];

    constructor(){
        super();
    }

    pushOperandExpression(operandExpression : AbstractExpression){
        this.operandList.push(operandExpression);
    }

}

export default AbstractOperationExpression;
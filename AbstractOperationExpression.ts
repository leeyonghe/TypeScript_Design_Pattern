import AbstractExpression from "./AbstractExpression";

abstract class AbstractOperationExpression extends AbstractExpression{

    protected operandList : AbstractExpression[] = [];

    pushOperandExpression(operandExpression : AbstractExpression) : void{
        this.operandList.push(operandExpression);
    }

}

export default AbstractOperationExpression;
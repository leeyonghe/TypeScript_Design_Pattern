import AbstractExpression from "./AbstractExpression";
import AbstractVisitor from "./AbstractVisitor";

abstract class AbstractOperationExpression extends AbstractExpression{

    protected operandList : AbstractExpression[] = [];

    constructor(){
        super();
    }

    addOperandExpression(operandExpression : AbstractExpression){
        this.operandList.push(operandExpression);
    }

    accept(visitor: AbstractVisitor): void {
        for (const item of this.operandList) {
            item.accept(visitor);
        }
    }

}
export default AbstractOperationExpression;
import AbstractOperationExpression from "./AbstractOperationExpression";

class DivideOperationExpression extends AbstractOperationExpression{

    operate(): number {
        let firstOperandExpression = this.operandList[0];
        let secondOperandExpression = this.operandList[1];

        let firstResult = firstOperandExpression.operate();
        let secondResult = secondOperandExpression.operate();

        return firstResult / secondResult;
    }

}

export default DivideOperationExpression;
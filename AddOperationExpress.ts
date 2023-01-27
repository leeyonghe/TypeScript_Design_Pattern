import AbstractOperationExpression from "./AbstractOperationExpression";

class AddOperationExpress extends AbstractOperationExpression{

    operate(): number {
        
        let firstOperandExpression = this.operandList[0];
        let secondOperandExpression = this.operandList[1];

        let firstNumber = firstOperandExpression.operate();
        let secondNumber = secondOperandExpression.operate();

        return firstNumber + secondNumber;
    }

}

export default AddOperationExpress;
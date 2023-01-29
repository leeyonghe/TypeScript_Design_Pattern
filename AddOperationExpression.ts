import AbstractExpression from "./AbstractExpression";
import AbstractOperationExpression from "./AbstractOperationExpression";
import CalcContext from "./CalcContext";

class AddOperationExpression extends AbstractOperationExpression{

    protected getFunctionName(): string {
        return "ADD";
    }
    operate(): number {

        for (let i = 0; i < this.operandList.length; i++) {
            const e = this.operandList[i];
            console.log(" operandList : "+e);
        }

        let firstOperationExpression = this.operandList[0];
        let secondOperationExpression = this.operandList[1];
        let firstResult = firstOperationExpression.operate();
        let secondResult = secondOperationExpression.operate();
        return firstResult + secondResult;
    }

    
}
export default AddOperationExpression;
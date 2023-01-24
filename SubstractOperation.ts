import AbstractOperationTarget from "./AbstractOperationTarget";

class SubstractOperation extends AbstractOperationTarget{
    
    operate(firstNumber: number, secondNumber: number): number {
        let result = firstNumber-secondNumber
        this.result = firstNumber + " - " +  secondNumber + " = " + result;
        return result;
    }

}

export default SubstractOperation;
import AbstractOperationTarget from "./AbstractOperationTarget";

class MultiflyOpeation extends AbstractOperationTarget{
    
    operate(firstNumber: number, secondNumber: number): number {
        let result = firstNumber*secondNumber
        this.result = firstNumber + " * " +  secondNumber + " = " + result;
        return result;
    }

}

export default MultiflyOpeation;
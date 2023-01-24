import AbstractOperationTarget from "./AbstractOperationTarget";

class AddOperation extends AbstractOperationTarget{

    constructor(){
        super();
    }
    
    operate(firstNumber: number, secondNumber: number): number {
        let result = firstNumber+secondNumber
        this.result = firstNumber + " + " +  secondNumber + " = " + result;
        return result;
    }

}

export default AddOperation;
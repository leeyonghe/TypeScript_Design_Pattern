import AbstractOperation from "./AbstractOperation";

class AddOperation extends AbstractOperation{
    
    constructor(){
        super();
    }

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

    toString() : string{
        return "AddOperation";
    }

    getOperation(): string {
        return "+";
    }

}

export default AddOperation;
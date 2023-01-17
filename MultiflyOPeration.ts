import AbstractOperation from "./AbstractOperation";

class MultiflyOPeration extends AbstractOperation{
    
    constructor(){
        super();
    }

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }

    toString() : string{
        return "MultiflyOPeration";
    }

}

export default MultiflyOPeration;
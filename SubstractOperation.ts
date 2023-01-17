import AbstractOperation from "./AbstractOperation";

class SubstractOperation extends AbstractOperation{
    
    constructor(){
        super();
    }

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }

    toString() : string{
        return "SubstractOperation";
    }

    getOperation(): string {
        return "-";
    }

}

export default SubstractOperation;
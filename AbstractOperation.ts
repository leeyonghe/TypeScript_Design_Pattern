abstract class AbstractOperation {

    constructor(){

    }

    abstract operate(firstNumber : number, secondNumber : number) : number;

    abstract getOperation(): string;

    abstract toString() : string;

}

export default AbstractOperation;
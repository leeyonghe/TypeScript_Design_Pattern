import AbstractOperation from "./AbstractOperation";

class AddOperation extends AbstractOperation {

    constructor(){
        super();
    }

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }
    print(firstNumber: number, secondNumber: number): void {
        console.log(firstNumber + " + " + secondNumber + " = " + (firstNumber+secondNumber));
    }

}

export default AddOperation;
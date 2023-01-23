import AbstractOperator from "./AbstractOperator";

class AddOperator extends AbstractOperator{

    constructor(){
        super();
    }

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }
    getDescription(): string {
        return "+";
    }

}

export default AddOperator;
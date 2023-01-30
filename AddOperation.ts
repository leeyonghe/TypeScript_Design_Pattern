import AbstractOperation from "./AbstractOperation";

class AddOperation extends AbstractOperation{

    getAnswer(firstNumber: number, secondNumber: number) {
        return firstNumber + secondNumber;
    }
    getOperator(): string {
        return "+";
    }

}
export default AddOperation;
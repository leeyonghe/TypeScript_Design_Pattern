import AbstractOperation from "./AbstractOperation";

class MultiplyOperation extends AbstractOperation{

    getAnswer(firstNumber: number, secondNumber: number) {
        return firstNumber * secondNumber;
    }
    getOperator(): string {
        return "*";
    }

}
export default MultiplyOperation;
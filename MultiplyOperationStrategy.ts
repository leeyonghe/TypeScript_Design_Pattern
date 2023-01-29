import AbstractOperationStrategy from "./AbstractOperationStrategy";

class MultiplyOperationStrategy extends AbstractOperationStrategy{

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }
    getOperator(): string {
        return "*";
    }

}

export default MultiplyOperationStrategy;
import AbstractOperationStrategy from "./AbstractOperationStrategy";

class SubstractOperationStrategy extends AbstractOperationStrategy{

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }
    getOperator(): string {
        return "-";
    }

}

export default SubstractOperationStrategy;
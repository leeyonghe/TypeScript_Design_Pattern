import AbstractOperator from "./AbstractOperator";

class MultiflyOperator extends AbstractOperator{

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }
    getDescription(): string {
        return "*";
    }

}

export default MultiflyOperator;
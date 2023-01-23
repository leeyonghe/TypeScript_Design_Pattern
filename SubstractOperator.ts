import AbstractOperator from "./AbstractOperator";

class SubstractOperator extends AbstractOperator{
    
    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }
    
    getDescription(): string {
        return "-";
    }

}

export default SubstractOperator;
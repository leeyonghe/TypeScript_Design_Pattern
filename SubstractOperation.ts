import AbstractOperation from "./AbstractOperation";

class SubstractOperation extends AbstractOperation{

    getAnswer(firstNumber: number, secondNumber: number) {
        return firstNumber - secondNumber;
    }
    getOperator(): string {
        return "-";
    }

}
export default SubstractOperation;
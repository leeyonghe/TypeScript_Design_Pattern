import AbstractOperation from "./AbstractOperation";

class DivideOperation extends AbstractOperation{

    getAnswer(firstNumber: number, secondNumber: number) {
        return firstNumber / secondNumber;
    }
    getOperator(): string {
        return "/";
    }

}
export default DivideOperation;
import AbstractOperationSubject from "./AbstractOperationSubject";

class DivideOperationSubject extends AbstractOperationSubject{

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

}

export default DivideOperationSubject;
import AbstractOperationSubject from "./AbstractOperationSubject";

class SubstractOperationSubject extends AbstractOperationSubject{

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }

}

export default SubstractOperationSubject;
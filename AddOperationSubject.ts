import AbstractOperationSubject from "./AbstractOperationSubject";

class AddOperationSubject extends AbstractOperationSubject{

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

}

export default AddOperationSubject;
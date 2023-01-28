import AbstractOperationSubject from "./AbstractOperationSubject";

class MuliplyOperationSubject extends AbstractOperationSubject{

    operate(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }

}

export default MuliplyOperationSubject;
import AbstractOperationObserver from "./AbstractOperationObserver";
import OperationSubject from "./OperationSubject";

class MultiplyOperationObserver extends AbstractOperationObserver{

    constructor(observerSubject : OperationSubject){
        super(observerSubject);
    }

    update(): void {
        let firstNumber : number = this.getFirstNumber();
        let secondNumber : number = this.getSecondNumber();
        let answer = firstNumber * secondNumber;
        console.log(firstNumber + " * " + secondNumber + " = " + answer);
    }

}

export default MultiplyOperationObserver;
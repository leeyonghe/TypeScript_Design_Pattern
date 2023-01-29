import OperationSubject from "./OperationSubject";

abstract class AbstractOperationObserver{

    private operationSubject : OperationSubject;

    constructor(operationSubject : OperationSubject){
        this.operationSubject = operationSubject;
    }

    abstract update():void;

    getFirstNumber() : number{
       return this.operationSubject.firstNumber;
    }

    getSecondNumber() : number{
        return this.operationSubject.secondNumber;
     }

}
export default AbstractOperationObserver;
import AbstractOperationHandler from "./AbstractOperationHandler";
import Request from "./Request";

class SubstractOperationHandler extends AbstractOperationHandler{

    constructor(operator : string){
        super(operator);
    }

    operate(request: Request): number {
        console.log("SubstractOperationHandler :");
        let firstNumber = request.getFirstNumber(this.operator);
        let secondNumber = request.getSecondNumber(this.operator);
        return firstNumber - secondNumber;
    }

}

export default SubstractOperationHandler;
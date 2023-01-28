import AbstractOperationHandler from "./AbstractOperationHandler";
import Request from "./Request";

class MultiplyOperationHandler extends AbstractOperationHandler{

    constructor(operator : string){
        super(operator);
    }

    operate(request: Request): number {
        console.log("MultiplyOperationHandler :");
        let firstNumber = request.getFirstNumber(this.operator);
        let secondNumber = request.getSecondNumber(this.operator);
        console.log("firstNumber :"+firstNumber);
        console.log("secondNumber :"+secondNumber);
        return firstNumber * secondNumber;
    }

}

export default MultiplyOperationHandler;
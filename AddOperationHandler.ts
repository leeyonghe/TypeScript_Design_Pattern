import AbstractOperationHandler from "./AbstractOperationHandler";
import Request from "./Request";

class AddOperationHandler extends AbstractOperationHandler{

    constructor(operator : string){
        super(operator);
    }

    operate(request: Request): number {
        console.log("AddOperationHandler :");
        let firstNumber = request.getFirstNumber(this.operator);
        let secondNumber = request.getSecondNumber(this.operator);
        return firstNumber + secondNumber;
    }

}

export default AddOperationHandler;
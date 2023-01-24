import AbstractOperationTarget from "./AbstractOperationTarget";
import OperationAdaptee, { OPERATION_TYPE } from "./OperationAdaptee";

class DivideOperationAdapter extends AbstractOperationTarget{

    private adaptee : OperationAdaptee;

    constructor(adaptee : OperationAdaptee){
        super();
        this.adaptee = adaptee;
    }

    operate(firstNumber: number, secondNumber: number): number {
        return this.adaptee.calculate(OPERATION_TYPE.DIVIDE, firstNumber, secondNumber);
    }

}

export default DivideOperationAdapter;
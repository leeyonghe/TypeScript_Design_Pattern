
export enum OPERATION_TYPE{
    ADD,
    SUBSTRACT,
    MULTIPLY,
    DIVIDE,
    NONE
}

class OperationAdaptee {

    constructor(){

    }

    public calculate(type : OPERATION_TYPE, firstNumber : number, secondNumber : number) : number{
        switch (type) {
            case OPERATION_TYPE.ADD:return firstNumber + secondNumber;
            case OPERATION_TYPE.SUBSTRACT:return firstNumber - secondNumber;
            case OPERATION_TYPE.MULTIPLY:return firstNumber * secondNumber;
            case OPERATION_TYPE.DIVIDE:return firstNumber / secondNumber;
        }
        return OPERATION_TYPE.NONE
    }
    
}

export default OperationAdaptee;
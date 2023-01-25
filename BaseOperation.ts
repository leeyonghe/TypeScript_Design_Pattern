import IBaseOperationImplementor from "./IBaseOperationImplementor";

class BaseOperation implements IBaseOperationImplementor{

    constructor(){

    }

    substract(firstNumber: number, secondNumer: number): number {
        return firstNumber - secondNumer;
    }
    multiply(firstNumber: number, secondNumer: number): number {
        return firstNumber * secondNumer;
    }
    add(firstNumber: number, secondNumer: number): number {
        return firstNumber + secondNumer;
    }

}

export default BaseOperation;
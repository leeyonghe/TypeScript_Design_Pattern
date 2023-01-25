import IBaseOperationImplementor from "./IBaseOperationImplementor"

class AbstractOperation {

    private impl : IBaseOperationImplementor;
    
    constructor(impl : IBaseOperationImplementor){
        this.impl = impl;
    }

    add(firstNumber : number, secondNumer : number) : number{
        return this.impl.add(firstNumber, secondNumer);
    }

    multiply(firstNumber : number, secondNumer : number) : number{
        return this.impl.multiply(firstNumber, secondNumer);
    }

    substract(firstNumber : number, secondNumer : number) : number{
        return this.impl.substract(firstNumber, secondNumer);
    }

}

export default AbstractOperation;
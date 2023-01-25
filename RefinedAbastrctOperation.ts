import AbstractOperation from "./AbstractOperation";
import IBaseOperationImplementor from "./IBaseOperationImplementor";

class RefinedAbastractOperation extends AbstractOperation{

    constructor(impl : IBaseOperationImplementor){
        super(impl);
    }

    sqrt(a : number) : number{
        return Math.sqrt(a);
    }

    pow(a : number, b : number) : number{
        return Math.pow(a,b);
    }

}

export default RefinedAbastractOperation;
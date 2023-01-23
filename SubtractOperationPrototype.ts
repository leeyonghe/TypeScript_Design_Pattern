import AbstractOperationPrototype from "./AbstractOperationPrototype";

class SubstractOperationPrototype extends AbstractOperationPrototype{
    
    constructor(operationPrototype : AbstractOperationPrototype){
        super(operationPrototype);
    }

    getClone(): AbstractOperationPrototype {
        return new SubstractOperationPrototype(this);
    }
    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }
    getOperator(): string {
        return "-";
    }
    

}

export default SubstractOperationPrototype;
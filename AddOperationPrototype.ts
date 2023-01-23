import AbstractOperationPrototype from "./AbstractOperationPrototype";

class AddOperationPrototype extends AbstractOperationPrototype{
    
    constructor(operationPrototype : AbstractOperationPrototype){
        super(operationPrototype);
    }

    getClone(): AbstractOperationPrototype {
        return new AddOperationPrototype(this);
    }

    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber + firstNumber;
    }
    getOperator(): string {
        return "+";
    }

}

export default AddOperationPrototype;
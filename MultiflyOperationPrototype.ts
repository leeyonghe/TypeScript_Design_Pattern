import AbstractOperationPrototype from "./AbstractOperationPrototype";

class MultiflyOperationPrototype extends AbstractOperationPrototype{

    constructor(operationPrototype : AbstractOperationPrototype){
        super(operationPrototype);
    }

    getClone(): AbstractOperationPrototype {
        return new MultiflyOperationPrototype(this);
    }
    getAnswer(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }
    getOperator(): string {
        return "*";
    }


}

export default MultiflyOperationPrototype;
import AbstractOperationPrototype from "./AbstractOperationPrototype";
import AddOperationPrototype from "./AddOperationPrototype";
import MultiflyOperationPrototype from "./MultiflyOperationPrototype";
import SubstractOperationPrototype from "./SubtractOperationPrototype";


class Client { 

    private operationPrototype : AbstractOperationPrototype;
    private operationPrototypeMap : any = {};

    constructor(){
        this.operationPrototypeMap["+"] = new AddOperationPrototype(null);
        this.operationPrototypeMap["-"] = new SubstractOperationPrototype(null);
        this.operationPrototypeMap["*"] = new MultiflyOperationPrototype(null);
    }

    operate() : void{
        this.operationPrototype.operate();
    }

    getOperationClone(operator: string): AbstractOperationPrototype {
        let operation : AbstractOperationPrototype = this.operationPrototypeMap[operator];
        return operation.getClone();
    }

    setOperation(operator : string, firstNumber : number, secondNumber : number){
        this.operationPrototype = this.getOperationClone(operator);
        this.operationPrototype.firstNumber = firstNumber;
        this.operationPrototype.secondNumber = secondNumber;
    }

}


export default Client;
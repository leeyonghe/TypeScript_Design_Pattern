import AbstractAggregate from "./AbstractAggregate";
import AbstractOperation from "./AbstractOperation";
import ICalcIterator from "./ICalcIterator";
import OperationAggregate from "./OperationAggregate";

class OperationIterator implements ICalcIterator{

    private operationAggregate : OperationAggregate;
    private index : number = 0;
    
    constructor(operationAggregate : OperationAggregate){
        this.operationAggregate = operationAggregate;
    }

    hasNext(): boolean {
        if (this.index < this.operationAggregate.getSize()) {
            return true;
        }else{
            return false;
        }
    }
    Next(): AbstractOperation {
        let operation = this.operationAggregate.getOperationAt(this.index++);
        return operation;
    }

}
export default OperationIterator;
import AbstractAggregate from "./AbstractAggregate";
import AbstractOperation from "./AbstractOperation";
import ICalcIterator from "./ICalcIterator";
import OperationIterator from "./OperationIterator";

class OperationAggregate extends AbstractAggregate{

    private operation : AbstractOperation[] = [];

    createIterator(): ICalcIterator {
        return new OperationIterator(this);
    }

    addOperation(operation : AbstractOperation){
        this.operation.push(operation);
    }

    getOperationAt(index : number) : AbstractOperation{
        return this.operation[index];
    }

    getSize() : number{
        return this.operation.length;
    }

}

export default OperationAggregate;
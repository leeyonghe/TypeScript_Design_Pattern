import AbstractOperation from "./AbstractOperation";

interface ICalcIterator{
    hasNext() : boolean;
    Next() : AbstractOperation;
}

export default ICalcIterator;
import ICalcIterator from "./ICalcIterator";

abstract class AbstractAggregate{
    
    abstract createIterator() : ICalcIterator;
    
}

export default AbstractAggregate;
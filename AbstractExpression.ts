import AbstractVisitor from "./AbstractVisitor";

abstract class AbstractExpression{

    abstract operate() : number;
    
    accept(visitor : AbstractVisitor) : void{
        
    }

}
export default AbstractExpression;
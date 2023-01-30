import AbstractExpression from "./AbstractExpression";
import AbstractVisitor from "./AbstractVisitor";

class NumberExpression extends AbstractExpression{
    
    private value : number;

    constructor(value : number){
        super();
        this.value = value;
    }

    operate():number{
        return this.value;
    }

}
export default NumberExpression;
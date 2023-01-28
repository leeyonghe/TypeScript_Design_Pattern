import AbstractExpression from "./AbstractExpression";
import CalcContext from "./CalcContext";

class NumberExpression extends AbstractExpression{
    
    private value : number;

    constructor(value : number){
        super();
        this.value = value;
    }

    operate() : number{
        return this.value;
    }

    parse(context: CalcContext): void {
        
    }

}
export default NumberExpression;
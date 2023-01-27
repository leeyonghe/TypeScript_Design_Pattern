import AbstractDecoratorExpression from "./AbstractDecoratorExpression";
import AbstractExpression from "./AbstractExpression";

class FracDecoratorExpression extends AbstractDecoratorExpression{

    constructor(expression : AbstractExpression){
        super(expression);
    }

    operate(): number {
        return 1/ this._expression.operate();
    }

}

export default FracDecoratorExpression;
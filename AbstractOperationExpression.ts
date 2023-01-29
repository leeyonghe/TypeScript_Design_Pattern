import AbstractExpression from "./AbstractExpression";
import AbstractFunctionExpression from "./AbstractFunctionExpression";
import CalcContext from "./CalcContext";
import CalcExpressionFactory from "./CalcExpressionFactory";

abstract class AbstractOperationExpression extends AbstractFunctionExpression{

    protected operandList : AbstractExpression[] = [];

    constructor(){
        super();
    }

    pushOperandExpression(operandExpression : AbstractExpression){
        this.operandList.push(operandExpression);
    }

    parse(context: CalcContext): void {

        context.skipToken(this.getFunctionName());

        context.getCurrentTokenAndToNext();

        context.skipToken("(");

        let currentToken = context.getCurrentTokenAndToNext();

        let operandExpression = CalcExpressionFactory.getInstance().createExpression(currentToken);

        operandExpression.parse(context);

        this.pushOperandExpression(operandExpression);

        context.getCurrentTokenAndToNext();

        context.skipToken(",");

        currentToken = context.getCurrentTokenAndToNext();

        operandExpression = CalcExpressionFactory.getInstance().createExpression(currentToken);

        operandExpression.parse(context);

        this.pushOperandExpression(operandExpression);

        context.getCurrentTokenAndToNext();

        context.skipToken(")");
        
    }

}

export default AbstractOperationExpression;
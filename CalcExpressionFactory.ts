import AbstractExpression from "./AbstractExpression";
import AddOperationExpression from "./AddOperationExpression";
import CalcToken from "./CalcToken";
import NumberExpression from "./NumberExpression";

class CalcExpressionFactory {

    private static _instance : CalcExpressionFactory;

    constructor(){
        if (CalcExpressionFactory._instance) {
            return CalcExpressionFactory._instance;
        }
        CalcExpressionFactory._instance = this;
    }
    
    static getInstance(){
        if (!CalcExpressionFactory._instance) {
            CalcExpressionFactory._instance = new CalcExpressionFactory();
        }
        return CalcExpressionFactory._instance;
    }

    createExpression(calcToken : CalcToken) : AbstractExpression{
        let expression = null;
        switch (calcToken.type) {
            case CalcToken.NUMBER:
                expression = new NumberExpression(parseInt(calcToken.token, 10));
                break;
            case CalcToken.FUNCTION:{
                switch (calcToken.token) {
                    case "SQRT":{
                        
                    }break; 
                    case "FRAC":{
                        
                    }break; 
                    case "POW":{
                        
                    }break; 
                    case "ADD":{
                        expression = new AddOperationExpression();
                    }break; 
                    case "SUB":{
                        
                    }break; 
                    case "MUL":{
                        
                    }break; 
                    case "DIV":{
                        
                    }break;
                }
            }break;
        }
        return expression;
    }

}
export default CalcExpressionFactory;
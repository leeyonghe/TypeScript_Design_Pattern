import ExpressionParser from "./ExpressionParser";
import NumberOperand from "./NumberOperand";
import OperationFactory from "./OperationFactory";
import OperationProduct from "./OperationProduct";

class CalcuratorFacade {

    private expression : string;

    constructor(){

    }

    calculate(expression : string):void{

        let expressionParser = new ExpressionParser();
        expressionParser.parse(expression);

        let operatorToken : string = expressionParser.operationToken;
        let firstNumberToken : string = expressionParser.firstNumberToken;
        let secondNumberToken : string = expressionParser.secondNumberToken;

        let firstNumberOperand = new NumberOperand(firstNumberToken);
        let secondNumberOperand = new NumberOperand(secondNumberToken);

        let firstNumber = firstNumberOperand.getNumber();
        let secondNumber = secondNumberOperand.getNumber();

        let operationFactory = new OperationFactory();
        let operationProduct : OperationProduct = operationFactory.createOperationProduct(operatorToken);
        
        console.log(firstNumber + " " + operatorToken + " " + secondNumber + " = " +operationProduct.operate(firstNumber, secondNumber));

    }

}

export default CalcuratorFacade;
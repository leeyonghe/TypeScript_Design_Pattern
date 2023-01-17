import AbstractOperation from "./AbstractOperation";
import Calculator from "./Calculator";

class CalcClient {

    constructor(){

    }

    request(calcurator : Calculator, operation : AbstractOperation, firstNumber : number, secondNumber : number ) : number{
        calcurator.setOperation(operation);
        let answer = calcurator.calculate(firstNumber, secondNumber);
        return answer;
    }

}


export default CalcClient;
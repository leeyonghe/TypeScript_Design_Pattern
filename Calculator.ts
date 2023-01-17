import AddOperation from "./AddOperation";
import MultiflyOPeration from "./MultiflyOPeration";
import SubstractOperation from "./SubstractOperation";

class Calculator {

    private addOper : AddOperation;
    private subOper : SubstractOperation;
    private muliOper : MultiflyOPeration;

    constructor(){

    }

    // calculate(operator : string, firstNumber : number, secondNumber) : number{
    //     let answer = 0;
    //     switch(operator){
    //         case "+":{
    //             answer = firstNumber + secondNumber;
    //         }break;
    //         case "-":{
    //             answer = firstNumber - secondNumber;
    //         }break;
    //         case "*":{
    //             answer = firstNumber * secondNumber;
    //         }break;
    //         case "/":{
    //             answer = firstNumber / secondNumber;
    //         }break;
    //     }
    //     return answer;
    // }

    add(firstNumber : number, secondNumber) : number{
        let answer : number = this.addOper.operate(firstNumber, secondNumber);
        return answer;
    }

    substract(firstNumber : number, secondNumber) : number{
        let answer  = this.subOper.operate(firstNumber, secondNumber);
        return answer;
    }

    multifly(firstNumber : number, secondNumber) : number{
        let answer = this.muliOper.operate(firstNumber, secondNumber);
        return answer;
    }

    toString() : string{
        return "Calculator";
    }

    setAddOperation(addOper : AddOperation){
        this.addOper = addOper;
    }

    setSubsOperation(subOper : SubstractOperation){
        this.subOper = subOper;
    }

    setMultiOperation(muliOper : MultiflyOPeration){
        this.muliOper = muliOper;
    }

}

export default Calculator;
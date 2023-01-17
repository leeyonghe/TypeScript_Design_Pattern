import AbstractOperation from "./AbstractOperation";
import AddOperation from "./AddOperation";
import MultiflyOPeration from "./MultiflyOPeration";
import SubstractOperation from "./SubstractOperation";

export interface IDisplay{
    display() : void;
}

class Calculator implements IDisplay{

    private operation : AbstractOperation;
    private firstNumber : number;
    private secondNumber : number;
    private result : number;
    private operator : string;

    constructor(){
       
    }

    setOperation(operation : AbstractOperation){
        this.operation = operation;
    }

    calculate(firstNumber : number, secondNumber : number) : number{
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.result = this.operation.operate(firstNumber, secondNumber);
        this.operator = this.operation.getOperation();
        return this.result;
    }

    display() : void{
        console.log(this.firstNumber + this.operator + this.secondNumber + " = " + this.result);
    }

    toString() : string{
        return "Calculator";
    }

}

export default Calculator;
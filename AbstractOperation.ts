import AbstractOperator from "./AbstractOperator";

abstract class AbstractOperation {

    private _firstNumber : number = 0;
    private _secondNumber : number = 0;

    constructor(){

    }

    operator() : void{
        
        let firstNumber : number = this._firstNumber;
        let secondNumber : number = this._secondNumber;

        let operator : AbstractOperator = this.getOperator();
        let operatorDescription = operator.getDescription();

        let answer = operator.getAnswer(this._firstNumber, this._secondNumber);

        let result : string = this._firstNumber + operatorDescription + this._secondNumber + " = " + answer;

        this.print(result);

    }

    print(result: string) {
        console.log(result);
    }
    
    abstract getOperator(): AbstractOperator;
    
    public get firstNumber() : number {
        return this.firstNumber;
    }

    public set firstNumber(firstNumber : number){
        this._firstNumber = firstNumber;
    }

    public get secondNumber(){
        return this._secondNumber;
    }

    public set secondNumber(secondNumber : number) {
        this._secondNumber = secondNumber;
    }
    
    
}

export default AbstractOperation;
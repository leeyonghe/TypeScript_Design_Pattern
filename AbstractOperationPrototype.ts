
abstract class AbstractOperationPrototype { 

    private _firstNumber : number = 0;
    private _secondNumber : number = 0;

    constructor(operation : AbstractOperationPrototype){

        if (operation != null) {
            this._firstNumber = operation.firstNumber;
            this._secondNumber = operation.secondNumber;    
        }
        
    }

    abstract getClone() : AbstractOperationPrototype;

    abstract getAnswer(firstNumber : number, secondNumber : number) : number;

    abstract getOperator() : string;

    public get firstNumber() : number{
        return this._firstNumber;
    }

    public get secondNumber() : number{
        return this._secondNumber;
    }

    public set firstNumber(firstNumber : number){
        this._firstNumber = firstNumber;
    }

    public set secondNumber(secondNumber : number){
        this._secondNumber = secondNumber;
    }

    print(result : string) : void{
        console.log(result);
    }

    operate() : void{

        let firstNumber = this._firstNumber;
        let secondNumber = this._secondNumber;
        let operator : string = this.getOperator();
        let answer = this.getAnswer(firstNumber, secondNumber);
        let result : string = firstNumber + this.getOperator() + secondNumber + " = " + answer;
        this.print(result);

    }

}

export default AbstractOperationPrototype;
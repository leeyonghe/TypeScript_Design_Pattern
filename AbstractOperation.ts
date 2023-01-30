abstract class AbstractOperation{

    private _firstNumber: number;
    private _secondNumber: number;
    
    public get firstNumber(): number {
        return this._firstNumber;
    }
    public set firstNumber(value: number) {
        this._firstNumber = value;
    }

    public get secondNumber(): number {
        return this._secondNumber;
    }
    public set secondNumber(value: number) {
        this._secondNumber = value;
    }
    
    abstract getAnswer(firstNumber : number, secondNumber : number);
    abstract getOperator(): string;

    operate():void{        
        let answer = this.getAnswer(this._firstNumber, this._secondNumber);
        console.log(this._firstNumber + this.getOperator() + this._secondNumber + " = " + answer);
    }

}
export default AbstractOperation;
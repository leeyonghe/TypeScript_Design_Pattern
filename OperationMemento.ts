class OperationMemento{

    private _firstNumber: number;
    private _secondNumber: number;

    constructor(firstNumber : number, secondNumber : number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    
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

}
export default OperationMemento;
class OperationCommandReciever{

    private _result: number = 0;

    public get result(): number {
        return this._result;
    }
    public set result(value: number) {
        this._result = value;
    }

    add(value : number){
        this.result += value;
    }

    multiply(value : number){
        this.result *= value;
    }

    substract(value : number){
        this.result -= value;
    }

    divide(value : number){
        this.result /= value;
    }
    
}
export default OperationCommandReciever;
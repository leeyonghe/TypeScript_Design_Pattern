abstract class AbstractOperationTarget{

    private _result : string;

    abstract operate(firstNumber : number, secondNumber : number) : number;

    public get result(){
        return this._result;
    }

    public set result(result : string){
        this._result = result;
    }

    print(){
        console.log(this.result);
    }
}
export default AbstractOperationTarget;
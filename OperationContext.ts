import AbstractOperationStrategy from "./AbstractOperationStrategy";

class OperationContext{
    
    private _operationStrategy: AbstractOperationStrategy;


    public get operationStrategy(): AbstractOperationStrategy {
        return this._operationStrategy;
    }
    public set operationStrategy(value: AbstractOperationStrategy) {
        this._operationStrategy = value;
    }

    operate(firstNumber : number, secondNumber : number) : void{
        let answer = this._operationStrategy.getAnswer(firstNumber, secondNumber);
        let operator = this._operationStrategy.getOperator();

        let result = firstNumber + operator + secondNumber + " = " + answer;
        this.print(result);
    }

    print(result : string){
        console.log(result);
    }

}

export default OperationContext;
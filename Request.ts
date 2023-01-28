class Request{

    private _expression: string;
    
    constructor(expression : string){
        this._expression = expression;
    }

    public get expression(): string {
        return this._expression;
    }

    public set expression(value: string) {
        this._expression = value;
    }

    getFirstNumber(operator : string){
        let operatorIndex = this._expression.indexOf(operator);
        let firstNumber = this._expression.substring(0, operatorIndex);
        return parseInt(firstNumber, 10);
    }

    getSecondNumber(operator : string){
        let operatorIndex = this._expression.indexOf(operator);
        let secondNumber = this._expression.substring(operatorIndex+1);
        return parseInt(secondNumber, 10);
    }

}
export default Request;
class ExpressionParser {

    private operator : string[] = ["+","-","*","/"];
    private _operatorToken : string;
    private _firstNumberToken : string;
    private _secondNumberToken : string;

    constructor(){

    }

    get operationToken() : string{
        return this._operatorToken;
    }

    set operationToken(operationToken : string){
        this._operatorToken = operationToken;
    }

    get firstNumberToken() : string{
        return this._firstNumberToken;
    }

    set firstNumberToken(firstNumberToken : string){
        this._firstNumberToken = firstNumberToken;
    }

    get secondNumberToken() : string{
        return this._secondNumberToken;
    }

    set secondNumberToken(secondNumberToken : string){
        this._secondNumberToken = secondNumberToken;
    }

    parse(expression : string){
        
        // console.log('expression : '+expression);

        let operatorIndex : number = -1;

        for (let i = 0; i < this.operator.length; i++) {
            operatorIndex = expression.indexOf(this.operator[i]);
            if (operatorIndex != -1) {
                this.operationToken = this.operator[i];
                break;
            }
        }
        // console.log('operatorIndex : '+operatorIndex);
        this._firstNumberToken = expression.substring(0, operatorIndex);
        this._secondNumberToken = expression.substring(operatorIndex+1);
        
    }

}

export default ExpressionParser;
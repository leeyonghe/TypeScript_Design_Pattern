import CalcToken from "./CalcToken";
import CalcTokenizer from "./CalcTokenizer";

class CalcContext{

    private tokenizer : CalcTokenizer;
    private _currentToken: CalcToken;

    constructor(text : string){
        this.tokenizer = new CalcTokenizer(text);
        this._currentToken = null;
    }

    getCurrentTokenAndToNext() : CalcToken{
        if (this.tokenizer.hasMoreElements()) {
            this._currentToken = this.tokenizer.getCurrentTokenAndGoToNext();
        } else {
            this._currentToken = null;
        }
        return this._currentToken;
    }

    skipToken(token : string){
        if (token != this._currentToken.token) {
            throw new Error("error");
        }
    }

    print(){
        this.tokenizer.print();
    }
    public get currentToken(): CalcToken {
        return this._currentToken;
    }
    public set currentToken(value: CalcToken) {
        this._currentToken = value;
    }

}
export default CalcContext;
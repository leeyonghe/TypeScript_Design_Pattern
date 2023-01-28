import CalcToken from "./CalcToken";
import CalcTokenizer from "./CalcTokenizer";

class CalcContext{

    private tokenizer : CalcTokenizer;
    private currentToken : CalcToken;

    constructor(text : string){
        this.tokenizer = new CalcTokenizer(text);
        this.currentToken = null;
    }

}
export default CalcContext;
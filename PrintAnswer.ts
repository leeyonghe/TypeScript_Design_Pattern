import FlyweightConstants from "./FlyweightConstants";
import TextstyleFlyweight from "./TextstyleFlyweight";
import TextstyleFlyweightFactory from "./TextstyleFlyweightFactory";

class PrintAnswer{

    private textStyleFlyweightFactory : TextstyleFlyweightFactory;
    private _firstNumber: number;
    private _secondNumber: number;

    constructor(){
        this.textStyleFlyweightFactory = TextstyleFlyweightFactory.getInstance();
    }

    printResult(){
        
        let answer = [0,0,0,0];

        answer[0] = this._firstNumber + this._secondNumber;
        answer[1] = this._firstNumber - this._secondNumber;
        answer[2] = this._firstNumber * this._secondNumber;
        answer[3] = this._firstNumber / this._secondNumber;

        for (let i = 0; i < answer.length; i++) {
            let operator= FlyweightConstants.OPERATORS[i];
            let textArray = ["","","","",""];
            textArray[0] = "" + this._firstNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
            textArray[1] = operator;
            textArray[2] = "" + this._secondNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
            textArray[3] = FlyweightConstants.EQUAL_CHAR;
            textArray[4] = "" + answer[i] + this.getTextStyle(FlyweightConstants.ANSWER_STYLE_NAME);
            console.log(textArray[0],textArray[1],textArray[2],textArray[3],textArray[4]);
        }
        
    }

    getTextStyle(name: string) : TextstyleFlyweight {
        return this.textStyleFlyweightFactory.getTextStyleFlyweight(name);
    }

    public get firstNumber(): number {
        return this._firstNumber;
    }
    public set firstNumber(firstNumber: number) {
        this._firstNumber = firstNumber;
    }

    public get secondNumber(): number {
        return this._secondNumber;
    }
    public set secondNumber(secondNumber: number) {
        this._secondNumber = secondNumber;
    }

}
export default PrintAnswer;
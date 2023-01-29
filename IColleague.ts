import ClientMediator from "./ClientMediator";
import IMediator from "./IMediator";

abstract class IColleague{

    private _mediator: ClientMediator;
    
    private _firstNumber: number = 100;

    private _secondNumber: number = 90;
    
    constructor(){

    }

    abstract getAnswer() : number;

    abstract getOperator() : string;

    public printResult(){
        let answer = this.getAnswer();
        console.log(this._firstNumber + this.getOperator() + this._secondNumber + " = " + answer);
    }

    public changeFirstNumber(firstNumber : number){
        this._firstNumber = firstNumber;
        this.mediator.colleagueChanged(this);
    }

    public changeSecondNumber(secondNumber : number){
        this._secondNumber = secondNumber;
        this.mediator.colleagueChanged(this);
    }

    public get mediator(): ClientMediator {
        return this._mediator;
    }

    public set mediator(value: ClientMediator) {
        this._mediator = value;
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

export default IColleague;
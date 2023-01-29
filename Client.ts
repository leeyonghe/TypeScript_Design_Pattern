import IContext from "./IContext";
import IState from "./IState";
import StartState from "./StartState";

class Client implements IContext{

    private displayNumber: string = "";

    private result : number = 0;

    private lastOperator: string = "=";
    
    private state : IState;

    constructor(){
        this.changeState(StartState.getInstance());
    }

    changeState(state: StartState) {
        this.state = state;
    }

    isOperator(actionCommand : string) : boolean{
        switch (actionCommand) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "=":
                return true;
            default:return false;
        }
    }

    action(actionCommand : string) : void{
        this.state.action(this, actionCommand);
    }

    upateDisplay(text : string) : void{
        this.displayNumber = text;
        console.log("log : "+text);
    }

    appendInputToDisplay(input : string) : void{
        this.upateDisplay(this.displayNumber + input);
    }

    calculate() : void{
        this._calculate(this.lastOperator, parseInt(this.displayNumber, 10));
    }

    _calculate(operator : string, value : number) : void{
        switch (operator) {
            case "+":
                this.result += value;
                break;
            case "-":
                this.result -= value;
                break;
            case "*":
                this.result *= value;
                break;
            case "/":
                this.result /= value;
                break;
            case "=":
                this.result = value;
                break;
        }
        this.upateDisplay(""+this.result);
    }

    setLastOperator(LastCommand : string) : void{
        this.lastOperator = LastCommand;
    }

}
export default Client;
import IContext from "./IContext";
import IState from "./IState";
import InputState from "./InputState";
import OperatorState from "./OperatorState";

class StartState implements IState{

    private static _instance : IState;

    constructor(){
        if (StartState._instance) {
            return StartState._instance;
        }
        StartState._instance = this;
    }

    static getInstance() : StartState{
        if (!StartState._instance) {
            StartState._instance = new StartState();
        }
        return StartState._instance;
    }

    action(context: IContext, actionCommand: string): void {
        console.log("here is StartState");
        context.upateDisplay(actionCommand);
        context.changeState(InputState.getInstance())
    }

}

export default StartState;
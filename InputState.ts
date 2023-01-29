import IContext from "./IContext";
import IState from "./IState";
import OperatorState from "./OperatorState";

class InputState implements IState{

    private static _instance : IState;

    constructor(){
        if (InputState._instance) {
            return InputState._instance;
        }
        InputState._instance = this;
    }

    static getInstance() : InputState{
        if (!InputState._instance) {
            InputState._instance = new InputState();
        }
        return InputState._instance;
    }

    action(context: IContext, actionCommand: string): void {
        console.log("here is InputState : "+actionCommand);
        if (context.isOperator(actionCommand)) {
            context.calculate();
            context.setLastOperator(actionCommand);
            context.changeState(OperatorState.getInstance())
        }else{
            context.appendInputToDisplay(actionCommand);
        }
    }

}

export default InputState;
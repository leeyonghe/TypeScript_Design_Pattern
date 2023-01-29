import IContext from "./IContext";
import IState from "./IState";
import InputState from "./InputState";

class OperatorState implements IState{

    private static _instance : IState;

    constructor(){
        if (OperatorState._instance) {
            return OperatorState._instance;
        }
        OperatorState._instance = this;
    }

    static getInstance() : OperatorState{
        if (!OperatorState._instance) {
            OperatorState._instance = new OperatorState();
        }
        return OperatorState._instance;
    }

    action(context: IContext, actionCommand: string): void {
        console.log("here is OperatorState : "+actionCommand);
        if (context.isOperator(actionCommand)) {
            context.setLastOperator(actionCommand);
        }else{
            context.upateDisplay("");
            context.appendInputToDisplay(actionCommand);
            context.changeState(InputState.getInstance());
        }
    }

}
export default OperatorState;
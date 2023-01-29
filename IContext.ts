import IState from "./IState";

interface IContext {

    changeState(state : IState) : void;

    upateDisplay(text : string) : void;

    appendInputToDisplay(input : string) : void;

    isOperator(actionCommand : string) : boolean;

    calculate() : void;

    setLastOperator(LastCommand : string) : void;

}
export default IContext;
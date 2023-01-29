import IContext from "./IContext";

interface IState {

    action(context : IContext, actionCommand : string) : void;

}
export default IState;
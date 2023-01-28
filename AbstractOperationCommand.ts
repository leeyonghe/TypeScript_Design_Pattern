import OperationCommandReciever from "./OperationCommandReciever";

abstract class AbstractOperationCommand{

    protected receiver : OperationCommandReciever;
    protected value : number;

    constructor(receiver : OperationCommandReciever, value : number){
        this.receiver = receiver;
        this.value = value;
    }
    
    abstract execute() : void;

}
export default AbstractOperationCommand;
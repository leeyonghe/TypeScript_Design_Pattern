import AbstractOperationCommand from "./AbstractOperationCommand";
import OperationCommandReciever from "./OperationCommandReciever";

class DivideOperationCommand extends AbstractOperationCommand{
    
    constructor(receiver : OperationCommandReciever, value : number){
        super(receiver, value);
    }

    execute(): void {
        this.receiver.divide(this.value);
    }

}

export default DivideOperationCommand;
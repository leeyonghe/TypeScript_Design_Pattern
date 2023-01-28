import AbstractOperationCommand from "./AbstractOperationCommand";
import OperationCommandReciever from "./OperationCommandReciever";

class SubstractOperationCommand extends AbstractOperationCommand{

    constructor(receiver : OperationCommandReciever, value : number){
        super(receiver, value);
    }

    execute(): void {
        this.receiver.substract(this.value);
    }

}

export default SubstractOperationCommand;
import AbstractOperationCommand from "./AbstractOperationCommand";
import OperationCommandReciever from "./OperationCommandReciever";

class AddOperationCommand extends AbstractOperationCommand{

    constructor(receiver : OperationCommandReciever, value : number){
        super(receiver, value);
    }

    execute(): void {
        this.receiver.add(this.value);
    }

}

export default AddOperationCommand;
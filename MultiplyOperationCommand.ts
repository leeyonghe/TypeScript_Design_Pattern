import AbstractOperationCommand from "./AbstractOperationCommand";
import OperationCommandReciever from "./OperationCommandReciever";

class MultiplyOperationCommand extends AbstractOperationCommand{

    constructor(receiver : OperationCommandReciever, value : number){
        super(receiver, value);
    }

    execute(): void {
        this.receiver.multiply(this.value);
    }

}

export default MultiplyOperationCommand;
import AbstractOperation from "./AbstractOperation";
import AbstractOperator from "./AbstractOperator";
import MultiflyOperator from "./MultiflyOperator";

class MultiflyOperation extends AbstractOperation{
    
    getOperator(): AbstractOperator {
        return new MultiflyOperator();
    }

}

export default MultiflyOperation;
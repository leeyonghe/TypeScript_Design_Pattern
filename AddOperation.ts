import AbstractOperation from "./AbstractOperation";
import AbstractOperator from "./AbstractOperator";
import AddOperator from "./AddOperator";

class AddOperation extends AbstractOperation{

    getOperator(): AbstractOperator {
        return new AddOperator();
    }
    
}

export default AddOperation;
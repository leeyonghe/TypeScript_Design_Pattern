import AbstractOperation from "./AbstractOperation";
import AbstractOperator from "./AbstractOperator";
import SubstractOperator from "./SubstractOperator";

class SubstractOperation extends AbstractOperation{
    
    getOperator(): AbstractOperator {
        return new SubstractOperator();
    }

}

export default SubstractOperation;
import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";
import AbstractOperationFactory from "./AbstractOperationFactory";
import AbstractOperationProduct from "./AbstractOperationProduct";
import IntergerNumerOperandProduct from "./IntergerNumerOperandProduct";
import IntergerOperationProduct from "./IntergerOperationProduct";

class IntergerOperationFactory extends AbstractOperationFactory{
    
    createOperationProduct(): AbstractOperationProduct {
        return new IntergerOperationProduct();
    }
    createNumberOperandProduct(value : string): AbstractNumberOperandProduct {
        return new IntergerNumerOperandProduct(value);
    }

}

export default IntergerOperationFactory;
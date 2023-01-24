import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";
import AbstractOperationFactory from "./AbstractOperationFactory";
import AbstractOperationProduct from "./AbstractOperationProduct";
import DoubleNumerOperandProduct from "./DoubleNumberOperandProduct";
import DoubleOperationProduct from "./DoubleOperationProduct";

class DoubleOperationFactory extends AbstractOperationFactory{

    createOperationProduct(): AbstractOperationProduct {
        return new DoubleOperationProduct();
    }

    createNumberOperandProduct(value : string): AbstractNumberOperandProduct {
        return new DoubleNumerOperandProduct(value);
    }

}
import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";
import AbstractOperationProduct from "./AbstractOperationProduct";

abstract class AbstractOperationFactory{

    constructor(){

    }

    abstract createOperationProduct(value : string) : AbstractOperationProduct;

    abstract createNumberOperandProduct(value : string) : AbstractNumberOperandProduct;

}
export default AbstractOperationFactory;
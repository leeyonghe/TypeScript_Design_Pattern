import OperationProduct from "./OperationProduct";

class OperationFactory{

    createOperationProduct(operatorToken: string) {
        return new OperationProduct(operatorToken);
    }

}
export default OperationFactory;
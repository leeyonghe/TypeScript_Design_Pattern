import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";

class DoubleNumerOperandProduct extends AbstractNumberOperandProduct{

    getNumber(): number {
        return parseFloat(this.value);
    }

}

export default DoubleNumerOperandProduct;
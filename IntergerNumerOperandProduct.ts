import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";

class IntergerNumerOperandProduct extends AbstractNumberOperandProduct{

    getNumber(): number {
        return parseInt(this.value);
    }

}

export default IntergerNumerOperandProduct;
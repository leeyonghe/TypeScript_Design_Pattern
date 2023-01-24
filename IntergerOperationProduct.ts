import AbstractOperationProduct from "./AbstractOperationProduct";

class IntergerOperationProduct extends AbstractOperationProduct{

    constructor(){
        super();
    }

    print(): void {
        let firstNumber = this.getFirstNumber();
        let secondNumber = this.getSecondNumber();
        console.log(firstNumber +" + "+ secondNumber + " = "+this.add());
        console.log(firstNumber +" - "+ secondNumber + " = "+this.substract());
        console.log(firstNumber +" * "+ secondNumber + " = "+this.multify());
    }

}

export default IntergerOperationProduct;
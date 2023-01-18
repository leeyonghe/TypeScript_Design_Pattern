import AbstractOperationBuilder from "./AbstractOperationBuilder";

class AddOperationBuilder extends AbstractOperationBuilder {

    constructor(firstNumber : number, secondNumber : number){
        super(firstNumber, secondNumber);
    }

    opertate(): number {
        return this.firstNumber+this.secondNumber;
    }

    toString(): string {
        return "AddOperationBuilder : "+this.firstNumber+" "+this.secondNumber
    }

    buildOperator(): void {
        this.result += "+"
    }

}

export default AddOperationBuilder;
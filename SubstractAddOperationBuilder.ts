import AbstractOperationBuilder from "./AbstractOperationBuilder";

class SubstractAddOperationBuilder extends AbstractOperationBuilder {

    constructor(firstNumber : number, secondNumber : number){
        super(firstNumber, secondNumber);
    }

    opertate(): number {
        return this.firstNumber-this.secondNumber;
    }

    toString(): string {
        return "SubstractAddOperationBuilder : "+this.firstNumber+" "+this.secondNumber
    }

    buildOperator(): void {
        this.result += "-"
    }

}

export default SubstractAddOperationBuilder;
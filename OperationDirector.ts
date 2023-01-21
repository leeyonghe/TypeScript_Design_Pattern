import AbstractOperationBuilder from "./AbstractOperationBuilder";

class OperationDirector {

    private builder : AbstractOperationBuilder;

    constructor(builder : AbstractOperationBuilder){
        this.builder = builder;
    }

    construct() : void{
        this.builder.buildFirstNumber();
        this.builder.buildOperator();
        this.builder.buildSecondNumber();
        this.builder.buildAnswer();
        let result = this.builder.getResult();
        console.log(result);
    }
    
}

export default OperationDirector;
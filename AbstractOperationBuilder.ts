abstract class AbstractOperationBuilder{

    protected firstNumber : number;
    protected secondNumber : number;

    protected result : string = "";

    constructor(firstNumber : number, secondNumber : number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    abstract opertate() : number;

    toString() : string{
        return "AbstractOperationBuilder : "+this.firstNumber+" "+this.secondNumber;
    }

    getResult() : string{
        return this.result;
    }

    buildFirstNumber() : void{
        this.result += this.firstNumber;
    }

    buildSecondNumber() : void{
        this.result += this.secondNumber;
    }

    buildAnswer(){
        let answer = this.opertate();
        this.result += " = "+answer;
    }

    buildOperator(){
        
    }

}

export default AbstractOperationBuilder;
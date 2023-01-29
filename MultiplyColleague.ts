import IColleague from "./IColleague";

class MultiplyColleague extends IColleague{

    constructor(){
        super();
    }

    getAnswer(): number {
        return this.firstNumber * this.secondNumber;
    }
    getOperator(): string {
        return "*";
    }

}

export default MultiplyColleague;
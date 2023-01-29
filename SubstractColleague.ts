import IColleague from "./IColleague";

class SubstractColleague extends IColleague{

    constructor(){
        super();
    }

    getAnswer(): number {
        return this.firstNumber - this.secondNumber;
    }
    getOperator(): string {
        return "-";
    }

}
export default SubstractColleague;
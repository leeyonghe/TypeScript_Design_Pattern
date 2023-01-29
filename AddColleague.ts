import IColleague from "./IColleague";
import IMediator from "./IMediator";

class AddColleague extends IColleague{

    constructor(){
        super();    
    }

    getAnswer(): number {
        return this.firstNumber+this.secondNumber;
    }
    getOperator(): string {
        return "+";
    }

}

export default AddColleague;
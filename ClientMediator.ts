import AddColleague from "./AddColleague";
import IColleague from "./IColleague";
import IMediator from "./IMediator";
import MultiplyColleague from "./MultiplyColleague";
import SubstractColleague from "./SubstractColleague";

class ClientMediator implements IMediator{

    private _addColleague: IColleague;
    private _substractColleague: IColleague;
    private _multiplyColleague: IColleague;

    constructor(){
        
        this.addColleague = new AddColleague();
        this.substractColleague = new SubstractColleague();
        this.multiplyColleague = new MultiplyColleague();

        this.createColleagues();

    }
    colleagueChanged(colleague: IColleague): void {
        
        let firstNumber = colleague.firstNumber;
        let secondNumber = colleague.secondNumber;

        this.addColleague.firstNumber = firstNumber;
        this.addColleague.secondNumber = secondNumber;

        this.addColleague.printResult();

        this.substractColleague.firstNumber = firstNumber;
        this.substractColleague.secondNumber = secondNumber;

        this.substractColleague.printResult();

        this.multiplyColleague.firstNumber = firstNumber;
        this.multiplyColleague.secondNumber = secondNumber;

        this.multiplyColleague.printResult();

    }

    createColleagues(){
        this.addColleague.mediator = this;
        this.substractColleague.mediator = this;
        this.multiplyColleague.mediator = this;
    }
    
    public get addColleague(): IColleague {
        return this._addColleague;
    }
    public set addColleague(value: IColleague) {
        this._addColleague = value;
    }
    public get substractColleague(): IColleague {
        return this._substractColleague;
    }
    public set substractColleague(value: IColleague) {
        this._substractColleague = value;
    }
    public get multiplyColleague(): IColleague {
        return this._multiplyColleague;
    }
    public set multiplyColleague(value: IColleague) {
        this._multiplyColleague = value;
    }
}

export default ClientMediator;
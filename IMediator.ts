import ClientMediator from "./ClientMediator";
import IColleague from "./IColleague";

interface IMediator{

    createColleagues() : void;
    colleagueChanged(colleague : IColleague) : void;

}
export default IMediator;
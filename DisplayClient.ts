import AbstractOperation from "./AbstractOperation";
import Calculator, { IDisplay } from "./Calculator";

class DisplayClient { 

    constructor(){

    }

    request(displayable : IDisplay, operation : AbstractOperation, firstNumber : number, secondNumber : number){
        displayable.display();
    }

}

export default DisplayClient;
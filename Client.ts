import AddOperation from "./AddOperation";
import CalcClient from "./CalcClient";
import Calculator from "./Calculator";
import DisplayClient from "./DisplayClient";
import MultiflyOPeration from "./MultiflyOPeration";
import SubstractOperation from "./SubstractOperation";

class Client {

    constructor(){

    }

    main() : void{
        
        let calculator = new Calculator();

        let firstNumber = 100;
        let secondNumber = 90;
        let operator = "+";

        let operation = new AddOperation()

        let calClient = new CalcClient();

        let answer = calClient.request(calculator, operation, firstNumber, secondNumber);

        let displayClient = new DisplayClient();

        displayClient.request(calculator, operation, firstNumber, secondNumber);


    }

}

export default Client;
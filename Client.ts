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

        let addOpr = new AddOperation()

        let mulOpr = new MultiflyOPeration();

        let subOpr = new SubstractOperation();

        let calClient = new CalcClient();

        let displayClient = new DisplayClient();

        let answer = calClient.request(calculator, addOpr, firstNumber, secondNumber);

        displayClient.request(calculator, addOpr, firstNumber, secondNumber);

        answer = calClient.request(calculator, subOpr, firstNumber, secondNumber);

        displayClient.request(calculator, subOpr, firstNumber, secondNumber);

        answer = calClient.request(calculator, mulOpr, firstNumber, secondNumber);

        displayClient.request(calculator, mulOpr, firstNumber, secondNumber);


    }

}

export default Client;
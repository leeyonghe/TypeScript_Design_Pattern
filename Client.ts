import AddOperation from "./AddOperation";
import Calculator from "./Calculator";
import MultiflyOPeration from "./MultiflyOPeration";
import SubstractOperation from "./SubstractOperation";

class Client {

    constructor(){

    }

    main() : void{
        
        let calculator = new Calculator();

        let addOper = new AddOperation();
        let subOper = new SubstractOperation();
        let muliOper = new MultiflyOPeration();

        calculator.setAddOperation(addOper);
        calculator.setSubsOperation(subOper);
        calculator.setMultiOperation(muliOper);

        let firstNumber = 100;
        let secondNumber = 90;
        let operator = "+";

        let result : number = calculator.add(firstNumber, secondNumber);
        console.log(firstNumber+" "+operator+" "+secondNumber+" : "+result);

        operator = "-";

        result = calculator.substract(firstNumber, secondNumber);
        console.log(firstNumber+" "+operator+" "+secondNumber+" : "+result);

        operator = "*";

        result = calculator.multifly(firstNumber, secondNumber);
        console.log(firstNumber+" "+operator+" "+secondNumber+" : "+result);

    }

}

export default Client;
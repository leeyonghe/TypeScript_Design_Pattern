import OperationMemento from "./OperationMemento";

class OperationOriginator {

    private _firstNumber = 100;
    private _secondNumber = 90;

    constructor(){

    }

    createMemento() : OperationMemento{
        return new OperationMemento(this._firstNumber, this._secondNumber);
    }

    setMemento(memento : OperationMemento){
        this._firstNumber = memento.firstNumber;
        this._secondNumber = memento.secondNumber;
    }

    printOperation(){
        console.log(this._firstNumber + " + " + this._secondNumber + " = " + (this._firstNumber+this._secondNumber));
        console.log(this._firstNumber + " - " + this._secondNumber + " = " + (this._firstNumber-this._secondNumber));
        console.log(this._firstNumber + " * " + this._secondNumber + " = " + (this._firstNumber*this._secondNumber));
        console.log(this._firstNumber + " / " + this._secondNumber + " = " + (this._firstNumber/this._secondNumber));
    }

    public get firstNumber() {
        return this._firstNumber;
    }
    public set firstNumber(value) {
        this._firstNumber = value;
    }
    public get secondNumber() {
        return this._secondNumber;
    }
    public set secondNumber(value) {
        this._secondNumber = value;
    }

}
export default OperationOriginator;
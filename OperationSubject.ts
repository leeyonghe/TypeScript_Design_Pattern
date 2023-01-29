import AbstractOperationObserver from "./AbstractOperationObserver";
import ISubject from "./ISubject";

class OperationSubject implements ISubject{
    
    private _firstNumber: number;
    
    private _secondNumber: number;

    private observers : AbstractOperationObserver[] = [];

    setNumber(firstNumber : number , secondNumber : number){
        this._firstNumber = firstNumber;
        this._secondNumber = secondNumber;
        this.notifyObservers();        
    }

    notifyObservers(): void {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update();            
        }
    }
    registerObservers(observer: AbstractOperationObserver): void {
        this.observers.push(observer);
    }
    removeObservers(observer: AbstractOperationObserver): void {
        let index = this.observers.indexOf(observer);
        if (index >= 0 ) {
            this.observers.slice(index, 1);
        }
    }

    public get firstNumber(): number {
        return this._firstNumber;
    }
    public set firstNumber(value: number) {
        this._firstNumber = value;
    }

    public get secondNumber(): number {
        return this._secondNumber;
    }
    public set secondNumber(value: number) {
        this._secondNumber = value;
    }

}
export default OperationSubject;
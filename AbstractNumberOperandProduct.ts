abstract class AbstractNumberOperandProduct{

    private _value : string;

    constructor(value : string){
        this._value = value;
    }
    
    abstract getNumber(): number;

    public get value(){
        return this._value;
    }

}
export default AbstractNumberOperandProduct;
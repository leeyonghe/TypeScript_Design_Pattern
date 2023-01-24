import AbstractNumberOperandProduct from "./AbstractNumberOperandProduct";

abstract class AbstractOperationProduct{

    private _firstNumberOperandProduct : AbstractNumberOperandProduct;
    private _secondNumberOperandProduct : AbstractNumberOperandProduct;

    abstract print() : void;

    protected add():number{
        return this.getFirstNumber()+this.getSecondNumber();
    }

    protected multify():number{
        return this.getFirstNumber()*this.getSecondNumber();
    }

    protected substract():number{
        return this.getFirstNumber()-this.getSecondNumber();
    }

    getFirstNumber() : number {
        return this._firstNumberOperandProduct.getNumber();
    }
    
    getSecondNumber() : number {
        return this._secondNumberOperandProduct.getNumber();
    }

    public get firstNumberOperandProduct(){
        return this._firstNumberOperandProduct;
    }

    public set firstNumberOperandProduct(firstNumberOperandProduct : AbstractNumberOperandProduct){
        this._firstNumberOperandProduct = firstNumberOperandProduct;
    }

    public get secondNumberOperandProduct(){
        return this._secondNumberOperandProduct;
    }

    public set secondNumberOperandProduct(secondNumberOperandProduct : AbstractNumberOperandProduct){
        this._secondNumberOperandProduct = secondNumberOperandProduct;
    }
    
}
export default AbstractOperationProduct;
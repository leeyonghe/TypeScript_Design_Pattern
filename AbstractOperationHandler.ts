class AbstractOperationHandler {

    private operator : string;
    private _next: AbstractOperationHandler;
    
    constructor(operator : string){
        this.operator = operator;
        this._next = null;
    }

    public get next(): AbstractOperationHandler {
        return this._next;
    }
    public set next(value: AbstractOperationHandler) {
        this._next = value;
    }


}
export default AbstractOperationHandler;
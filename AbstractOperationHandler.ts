import Request from "./Request";

abstract class AbstractOperationHandler {

    private _operator: string;
        
    private _next: AbstractOperationHandler;
    
    constructor(operator : string){
        this._operator = operator;
        this._next = null;
    }

    abstract operate(request : Request): number;

    handleRequest(request : Request) : number{
        if (this.resolve(request)) {
            let result = this.operate(request);
            return result;
        } else if(this._next != null){
            let result = this._next.operate(request);
            return result;
        } else {
            this.handleFail(request);
            return null;
        }
    }

    handleFail(request : Request) : void{
        console.log("failed");
    }

    resolve(request : Request) : boolean{
        if (request.expression.indexOf(this._operator) >= 0) {
            console.log(" true ");
            return true;
        } else {
            console.log(" false ");
            return false;
        }
    }
    
    public setNext(value: AbstractOperationHandler) : AbstractOperationHandler{
        this._next = value;
        return value;
    }

    public getNext() : AbstractOperationHandler{
        return this._next;
    }

    public get operator(): string {
        return this._operator;
    }
    public set operator(value: string) {
        this._operator = value;
    }


}
export default AbstractOperationHandler;
import AbstractExpression from "./AbstractExpression";
import AbstractVisitor from "./AbstractVisitor";

class VariableExpression extends AbstractExpression {
    
    private _name: string;
    private _value: number;

    constructor(name : string){
        super();
        this._name = name;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }

    operate(): number {
        return this._value;
    }

    accept(visitor: AbstractVisitor): void {
        visitor.visit(this);
    }

}

export default VariableExpression;
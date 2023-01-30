import AbstractExpression from "./AbstractExpression";
import SetValueToVariableVisitor from "./SetValueToVariableVisitor";

class Calcurator {

    private _expression: AbstractExpression;
    
    private variableToValueMap : any = {};

    calcurate(){
        if (this._expression != null) {
            for (const variableName in this.variableToValueMap) {                
                if (!this.variableToValueMap.hasOwnProperty(variableName)) {
                    continue;    
                }
                let value = this.variableToValueMap[variableName];
                let setValueToVariableVisitor = new SetValueToVariableVisitor(variableName, value);
                this._expression.accept(setValueToVariableVisitor);
            }
            return this._expression.operate();
        }
        return 0;
    }

    addVariableToValue(variableName : string, value : number){
        this.variableToValueMap[variableName] = value;
    }

    public get expression(): AbstractExpression {
        return this._expression;
    }
    public set expression(value: AbstractExpression) {
        this._expression = value;
    }
    

}

export default Calcurator;
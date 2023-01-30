import AbstractExpression from "./AbstractExpression";
import AbstractVisitor from "./AbstractVisitor";
import VariableExpression from "./VariableExpression";

class SetValueToVariableVisitor extends AbstractVisitor{

    private variableName : string;
    private value : number;

    constructor(variableName : string, value : number){
        super();
        this.variableName = variableName;
        this.value = value;
    }

    visit(expression: AbstractExpression): void {
        let variableExpression  : VariableExpression = <VariableExpression>expression;
        if (variableExpression.name == this.variableName) {
            variableExpression.value = this.value;
        }
    }

}

export default SetValueToVariableVisitor;
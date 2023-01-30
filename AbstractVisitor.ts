import AbstractExpression from "./AbstractExpression";

abstract class AbstractVisitor{

    abstract visit(expression : AbstractExpression) : void;

}
export default AbstractVisitor;
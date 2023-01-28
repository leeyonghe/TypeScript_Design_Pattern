import CalcContext from "./CalcContext";

abstract class AbstractExpression {

    abstract parse(context : CalcContext) : void;
    abstract operate() : number;

}
export default AbstractExpression;
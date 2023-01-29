abstract class AbstractOperationStrategy {

    abstract getAnswer(firstNumber : number, secondNumber : number) : number;
    abstract getOperator() : string;

}
export default AbstractOperationStrategy;
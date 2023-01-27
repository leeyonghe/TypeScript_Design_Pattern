class OperationProduct{

    private operatorToken : string;

    constructor(operatorToken : string){
        this.operatorToken = operatorToken;
    }
    
    operate(firstNumber: number, secondNumber: number) : number {
        switch (this.operatorToken) {
            case '+':
                return firstNumber + secondNumber;
            case '-':
                return firstNumber - secondNumber;
            case '*':
                return firstNumber * secondNumber;
            case '/':
                return firstNumber / secondNumber;
        }
        return 0;
    }

}
export default OperationProduct;
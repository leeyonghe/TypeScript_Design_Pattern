import IntergerOperationFactory from "./IntergerOperationFactory";
import IntergerOperationProduct from "./IntergerOperationProduct";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));



let firstNumer = "10.2"
let secondNumber = "20.3";

let operationFactory = new IntergerOperationFactory();

let operationProduct = operationFactory.createOperationProduct();

let firstNumberOperandProduct = operationFactory.createNumberOperandProduct(firstNumer);
let secondNumberOperandProduct = operationFactory.createNumberOperandProduct(secondNumber); 

operationProduct.firstNumberOperandProduct = firstNumberOperandProduct;
operationProduct.secondNumberOperandProduct = secondNumberOperandProduct;

operationProduct.print();


console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
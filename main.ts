import AddOperationHandler from "./AddOperationHandler";
import MultiplyOperationHandler from "./MultiplyOperationHandler";
import SubstractOperationHandler from "./SubstractOperationHandler";
import Request from "./Request";
import AbstractOperationHandler from "./AbstractOperationHandler";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));


let addOperationHandler = new AddOperationHandler("+");
let subStractOperationHandler = new SubstractOperationHandler("-");
let multiplyOperationHandler = new MultiplyOperationHandler("*");

addOperationHandler.setNext(subStractOperationHandler).setNext(multiplyOperationHandler);

let requests : Request[] = [new Request("100+90"),new Request("100-90"),new Request("100*90")];

let obj : AbstractOperationHandler = addOperationHandler;
let index = 0;
do {
    
    let answer = obj.handleRequest(requests[index]);
    let expression = requests[index].expression;
    console.log(expression + " = " +  answer)
    index++;
    
} while ((obj = obj.getNext()) != null);

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
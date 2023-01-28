import AddOperationCommand from "./AddOperationCommand";
import DivideOperationCommand from "./DivideOperationCommand";
import MultiplyOperationCommand from "./MultiplyOperationCommand";
import OperationCommandReciever from "./OperationCommandReciever";
import SubstractOperationCommand from "./SubstractOperationCommand";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let receiver = new OperationCommandReciever();

let result = receiver.result;

console.log("result : " + result);

let addCommand = new AddOperationCommand(receiver, 20);

addCommand.execute();

result = receiver.result;

console.log("result + 20 : " + result);

let substractCommand = new SubstractOperationCommand(receiver, 2);

substractCommand.execute();

result = receiver.result;

console.log("result - 2 : " + result);

let multiplyCommand = new MultiplyOperationCommand(receiver, 100);

multiplyCommand.execute();

result = receiver.result;

console.log("result * 100 : " + result);

let divideCommand = new DivideOperationCommand(receiver, 20);

divideCommand.execute();

result = receiver.result;

console.log("result / 20 : " + result);



console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
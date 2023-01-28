import Client from "./Client";
import PrintAnswer from "./PrintAnswer";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let client = new Client();
client.setupTextStyleFlyweightFactory();

let printAswner = new PrintAnswer();

printAswner.firstNumber = 100;
printAswner.secondNumber = 90;

printAswner.printResult();

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
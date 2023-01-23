import Client from "./Client";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let client = new Client();

let firstNumber : number = 100;
let secondNumber : number = 90;

const opertors = ["+","-","*"];

for (const key of opertors) {
   client.setOperation(key, firstNumber, secondNumber);
   client.operate();
}

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
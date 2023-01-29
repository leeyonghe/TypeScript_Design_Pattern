import Client from "./Client";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let client = new Client();

client.action("1");
client.action("0");
client.action("0");
client.action("+");
client.action("9");
client.action("0");
client.action("=");

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
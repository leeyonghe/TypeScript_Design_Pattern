import ClientMediator from "./ClientMediator";

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

let mediator = new ClientMediator();

let colleague = mediator.addColleague;

colleague.changeFirstNumber(50);

colleague = mediator.substractColleague;

colleague.changeSecondNumber(100);

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
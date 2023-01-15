console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
var JOB;
(function (JOB) {
    JOB[JOB["PROGRAMMER"] = 0] = "PROGRAMMER";
    JOB[JOB["DOCTOR"] = 1] = "DOCTOR";
    JOB[JOB["TEACHER"] = 2] = "TEACHER";
})(JOB || (JOB = {}));
var Person = /** @class */ (function () {
    function Person(name, age, job) {
        this._name = name;
        this._age = age;
        this._job = job;
    }
    Person.prototype.getJob = function () {
        return this._job;
    };
    Person.prototype.print = function () {
        console.log("Name : " + this._name + " | " + "Age : " + this._age + " | " + "JOB : " + this._job);
    };
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.getAge = function () {
        return this._age;
    };
    return Person;
}());
var person = new Person("Lee", 45, JOB.PROGRAMMER);
person.print();
console.log("###################### " + new Date().toLocaleTimeString("ko-KR"));
//# sourceMappingURL=main.js.map
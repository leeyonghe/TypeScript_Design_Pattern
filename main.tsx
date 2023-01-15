console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));

enum JOB {
    PROGRAMMER,
    DOCTOR,
    TEACHER
}

interface IPerson{
    getName() : string;
    getAge() : number;
    getJob() : JOB;
    print();
}

class Person implements IPerson{
    
    private _name: string;
    private _age: number;
    private _job: JOB;

    constructor(name : string, age : number, job : JOB){
        this._name = name;
        this._age = age;
        this._job = job;
    }

    getJob(): JOB {
        return this._job;
    }

    print() {
        console.log("Name : "+this._name+" | "+"Age : "+this._age+" | "+"JOB : "+this._job);
    }

    getName(): string {
        return this._name;
    }
    getAge(): number {
        return this._age;
    }

}

let person = new Person("Lee", 45, JOB.PROGRAMMER);
person.print();

console.log("###################### "+new Date().toLocaleTimeString("ko-KR"));
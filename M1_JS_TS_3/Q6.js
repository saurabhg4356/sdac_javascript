class Person{
    name 
    age
    constructor(name,age){
        this.name = name
        this.age = age
    }

}
class Employee extends Person{
    employeeID
    salary
    constructor(name,age,employeeID,salary){
        super(name,age)
        
        this.employeeID = employeeID
        this.salary = salary
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.employeeID);
        console.log(this.salary);
    }
}
// const person = new Person("saurabh",20)
const emp = new Employee("saurabh",20,101,20000)
emp.display()
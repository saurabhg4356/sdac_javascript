class Employee{
    id;
    name;
    salary
    constructor(id,name,salary){
        this.id = id
        this.name = name
        this.salary = salary
    }
    display(){
        console.log(this.name);
        
    }
}

module.export = {Employee}
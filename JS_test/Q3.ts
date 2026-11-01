class Student1 {
    name:string
    studentid:number
    grade:string
    address:string

    constructor(name:string,studentid:number,grade:string,address:string){
        this.name = name
        this.studentid = studentid
        this.grade = grade
        this.address = address
    }
    displayInfo():void{
        console.log(this.name);
        console.log(this.studentid);
        console.log(this.grade);
        console.log(this.address);
        
    }

}

const student1 = new Student1("saurabh",101,"A","Borivali");
student1.displayInfo()

class School{
    static totalStudents:number
    
    studentList = [{}]

    addStudent():void{
        School.totalStudents++
        this.studentList
        console.log(student1);
        
    }


}
const school = new School()
console.log(studentList);

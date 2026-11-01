class Student {
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
const student = new Student("saurabh",101,"A","Borivali");
student.displayInfo()

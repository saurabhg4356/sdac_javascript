abstract class Person{
    abstract getDetails():void
    abstract getRole():void
}
class Student3 extends Person{
    getDetails(): void {
        console.log("Student Details");
        
    }
    getRole(): void {
        console.log("Studnet Role");
        
    }
}
class Teacher extends Person{
    getDetails(): void {
        console.log("Teacher Details");
        
    }
    getRole(): void {
        console.log("Teacher Role");
        
    }
}
const s3 = new Student3();
s3.getDetails()
s3.getRole()

const t = new Teacher()
t.getDetails()
t.getRole()

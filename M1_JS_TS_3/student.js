//  class Student{
//     studentID
//     name 
//     course 
//     constructor(studentID,name,course){
//         this.studentID = studentID
//         this.name = name
//         this.course = course
//     }
//  }

function displayStudent(studentID,name,course){
    return {
        studentID,name,course}
    
}
// console.log(displayStudent(101,"saurabh","Java"));

 module.exports = {displayStudent}
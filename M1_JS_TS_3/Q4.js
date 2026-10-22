let students = [
 { name: "Amit", marks: 75 },
 { name: "Priya", marks: 90 },
 { name: "Rahul", marks: 45 },
 { name: "Sneha", marks: 80 }
];


    function scored60(n){
    if(n.marks>60){
        return n.marks
    }
}
const scored = students.filter(scored60)
console.log(...scored);
const student = scored.map((n)=>{
    const {name,marks} = n
    console.log("scored more than 60 name :"+name +", Marks = "+marks);
    // console.log(marks);

})
    const sumofMarks = students.reduce((sum,students)=> sum + students.marks,0)
    // console.log(sumofMarks);

    const average = sumofMarks/ students.length
    console.log("Average Marks of All Students :"+average);
    

    










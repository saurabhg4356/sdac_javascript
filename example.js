// const students = [
//   { name: "Amit", marks: [80, 75, 90] },
//   { name: "Neha", marks: [35, 40, 30] },
//   { name: "Raj", marks: [90, 95, 85] },
//   { name: "Priya", marks: [60, 70, 65] }
// ];

// // const totalMarks = students.reduce((students,total)=>{
// //     students.marks + total,0
// // })

// // const Marks = students.map(totalMarks)
// // console.log(totalMarks);

// const total = students.map((n)=>{
//   const Markstotal = n.marks.reduce((sum,mark)=> sum + mark,0
// )
// // console.log(Markstotal);

// const average = Markstotal/n.marks.length;

// // console.log(average);

// function result(average){
//   if(average<35){
    
//     // console.log("Fail");
    
//   }
//   else{
//     return {
//       name : n.name,
//       average : average,
//       total : Markstotal,
//       marks : n.marks,
//       result : result

//     }
//     // console.log("Pass");
    
//   }
// }

// console.log(result);

// // const pass = average.map(average)
// // console.log(pass);

// // const passResult = average.filter(result)
// // console.log(...passResult);


// // console.log(result());



// })



const students = [
    { name: "Amit", marks: [80, 75, 90] },
    { name: "Neha", marks: [35, 40, 30] },
    { name: "Raj", marks: [90, 95, 85] },
    { name: "Priya", marks: [60, 70, 65] }
];

// 1. Calculate total, average, and result
const studentResults = students.map(student => {
    const total = student.marks.reduce(
        (sum, mark) => sum + mark, 0
    );

    const average = total / student.marks.length;

    const result = student.marks.every(mark => mark >= 35)
        ? "Pass"
        : "Fail";

    return {
        name: student.name,
        marks: student.marks,
        total: total,
        average: average,
        result: result
    };
});

// Display all student results
console.log("Student Results:");

studentResults.forEach(student => {
    console.log(
        `${student.name} - Total: ${student.total}, ` +
        `Average: ${student.average.toFixed(2)}, ` +
        `Result: ${student.result}`
    );
});

// 2. Filter students who passed and have average > 70
const qualifyingStudents = studentResults.filter(
    student => student.result === "Pass" &&
               student.average > 70
);

console.log("\nQualifying Students:");

qualifyingStudents.forEach(student => {
    console.log(student.name);
});

// 3. Find the topper
const topper = studentResults.reduce((highest, student) => {
    return student.average > highest.average
        ? student
        : highest;
});

console.log("\nTopper:", topper.name);
console.log("Topper Average:", topper.average.toFixed(2));

// 4. Calculate class average
const totalAverage = studentResults.reduce(
    (sum, student) => sum + student.average, 0
);

const classAverage = totalAverage / studentResults.length;

console.log("\nClass Average:", classAverage.toFixed(2));

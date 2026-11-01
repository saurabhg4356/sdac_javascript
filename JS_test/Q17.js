const studentM = [20,90,86,45,70]

const totalMarks = studentM.reduce((sum,total)=>
    sum + total,0
)
console.log(totalMarks);

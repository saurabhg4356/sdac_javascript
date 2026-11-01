const studentM = [20,90,86,45,70]

const studentMarks = studentM.filter((n)=>{
    if(n >80 ){
        return n
    }
    
})
console.log(...studentMarks);

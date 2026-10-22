let numbers = [2, 5, 8, 10, 15, 20];
const square = numbers.map((n)=>{
    return n*n
})
console.log(...square);

function greater(n){
    if(n>20){
        return n
    }
}
const greater20 = numbers.filter(greater)
console.log(...greater20);

const sum = numbers.reduce((sum,total)=> 
    sum + total,0
    )
console.log(sum);


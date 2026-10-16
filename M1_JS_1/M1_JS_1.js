// Question 1

const student2 = {
    "st_name":"saurabh",
    "st_grade":"A",
    "st_subject":"English"
    
    
}
console.log(student2.st_grade);

// Question 2


const calculateGrade = (score)=>{
    if(score>90){
        return "Grade A"
    }
    else if(score>70 && score<90){
        return "Grade B"
    }
    else if(score>50 && score<70){
        return "Grade C"
    }
    else if(score>35 && score<50){
        return "Gade D"
    }
    else {
        return "Fail"
    }
}
console.log(calculateGrade(91));

// Question 3

const arr = [30, 40, 50, 80]

const increaseMarks =  arr.map(function(n){
    return n +10
} )
console.log(...increaseMarks);


// Question 4

const marks2 = [50,10,80,90,20]

function filterpassedStudents (n){
    
    if(n>35){
        return n
    }
}
const pass = marks2.filter(filterpassedStudents)
console.log(...pass);


// Question 5 A

const marks = [30,70,10,91,80,54]

const gradeDeclare = marks.map((n)=>{
    if(n>=90){
        return "A"
    }
    else if(n>=70 && n<90){
        return "B"
    }
    else if(n>=50 && n<70){
        return "C"
    }
    else if(n>=35 && n<50){
        return "D"
    }
    else {
        return "fail"
    }
})
// const grade = marks.push(gradeDeclare)

console.log(...gradeDeclare);


// Question 5 B

const score = (n)=>{
    if(n>=70){
        return n
    }
    
}
const scored70 = marks.filter(score)
console.log(...scored70);

// Question C

const temp2 = marks.reduce((marks,total)=>{
    return marks + total
})
console.log(temp2);

// Question 6

function topper(){
    return Math.max(...marks)
}
console.log(topper());

// Question 7



const student = [
    {
        "name":"saurabh",
        "marks":70
    },
    {
        "name":"rahul",
        "marks":90
    },
    {
        "name":"ramesh",
        "marks":50
    },
    {
        "name":"sandeep",
        "marks":80
    }
]

const marks80 = (student)=>{
    if(student.marks>=80){
        return student.marks
    }

}

const gardeA = student.filter((marks80))
console.log(gardeA);


// Question 8

const temp = student.reduce((total,student)=>
    student.marks+total,0
)
console.log(temp);

// Question 9

const products = ["TV","AC","Mouse","FAN"]
const [TV,AC,Mouse,FAN] = products
console.log(TV);


const product ={
    "name":"TV",
    "price":10000,
}
// const products =[{
//     "name":"TV",
//     "price":10000,
// },
// {
//     "name":"AC",
//     "price":20000,
// }
// ]
const {name,price} = product
console.log(name);

// Question 10

class Product {
    name;
    productId
    price;

    display(name,productId,price){
        console.log(name+" "+price+" "+price);
        
    }
}

const p = new Product()
p.display("saurabh",1,20000)

// Question 11

const person ={
    "name":"saurabh",
    "age":20,
    "gender":"Male"

    
}
console.log(person.name);

// Question 12

const square2 = (n)=>{
    return n*n
}
console.log(square2(5));

// Question 13

const two = [2, 3, 7, 8, 4]

const MultiplebyTwo = two.map(function (n){
    return n*2
})

console.log(MultiplebyTwo);
 
// Question 14 

const number2 = [1,2,3,4,5,6,7,8]

const filterEvenNumber = number2.filter((n)=>{
    if(n%2 != 0){
        return n
    }
})
console.log(filterEvenNumber);

// Question 15 

const number =[1,2,3,4,5,6,7,8]

const square = number.map((n)=>{
    return n*n
})
const odd = number.filter((n)=>{
    if(n%2 == 0){
        return n
    }
})
const sum = number.reduce((n,t)=>{
    return n+t
})
console.log(...square);
console.log(...odd);


console.log(sum);

// Question 16

const number3 = [7,9,2,4,5]
function max(){       //  Method 1
    return Math.max(...number3)
}
console.log(max());

const max = Math.max(...number3)
console.log(max);

// Question 17

const employees = [{
    "name ":"Saurabh",
    "salary":10000

},
{
    "name":"ramesh",
    "salary":120000
},
{
    "name ":"Rahul",
    "salary": 120000
},
{
    "name ":"Ravi",
    "salary":10000
},
{
    "name ":"Sandeep",
    "salary":100
}
]
const lessSalary = employees.filter((employees)=>{
    if(employees.salary >= 1000){
        return employees
    }
})

console.log(lessSalary);

// Question 18

const order = [
{
    "name ":"Saurabh",
    "salary":10000,
    

},
{
    "name":"ramesh",
    "salary":120000
},
{
    "name ":"Rahul",
    "salary": 120000
},
{
    "name ":"Ravi",
    "salary":10000
},
{
    "name ":"Sandeep",
    "salary":100
}
]
const totalSales = order.reduce((t,order)=> order.salary + t ,0)
console.log(totalSales);


const orders = [
  { orderId: 1, amount: 250 },
  { orderId: 2, amount: 400 },
  { orderId: 3, amount: 150 }
];

// const totalSales = orders.reduce((total, order) => total + order.amount, 0);

console.log(`Total sales: $${totalSales}`);
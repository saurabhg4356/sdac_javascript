// // Q1 Array Destructing

// const { setTimeout } = require("node:timers/promises")

// let numbers = [10,20,30,40,50,60]

// let [A,B,C,D,E,F] =numbers

// console.log(A);
// console.log(B);
// console.log(D);


// //Q2 Object Destructing 

// let student ={
//     name : "Rahul",
//     age : 21,
//     city : "Mumbai"
// };

// let {name,age, city:studentCity,course="unknown"} = student
// console.log(name);
// console.log(age);
// console.log(studentCity);
// console.log(course);




// Q4 Map,filter and reduce 

// let numbers = [2,5,8,10,15,20]
// let square = numbers.map(numbers=> numbers*numbers)

// let greater = numbers.filter(numbers=>numbers>=20)

// let sum = numbers.reduce((total,numbers)=> total+numbers)

// console.log(square);
// console.log(greater);
// console.log(sum);


// Q4 



// Q3 Map , filter , and Reduce

// let student = [
//     {name:"Amit",marks:75},
//     {name:"Priya",marks:90},
//      {name:"Rahul",marks:45},
//      {name:"Sneha",marks:80},

// ]

// let passedStudents = student.filter(student=>student.marks>60);
// console.log(passedStudents);

// let names = student.map(student=> student.name);
// console.log(names);


// let total = student.reduce((sum,student)=> sum+student.marks,0)



// let average = total/student.length;
// console.log(average);


//  Q5 JavaScript classes

// class BankAccount {
//     accountHolder=1542526000;
//     balance=2500;

//     deposit(amount){
//         console.log("your balance is now  "+(amount+this.balance));
        
//     }
//     withdraw(amount){
//         console.log("amount widrawn sucesfully"+amount);
        
//     }
// }

// const b = new BankAccount();
// b.deposit(500);
// b.withdraw(100);

// Q6  

// class Person {
//     name;
//     age;

//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }

// class Emp extends Person{
//     employeeId;
//     salary

//     constructor(employeeId, salary , name , age){
//         super(age,name)
//         this.employeeId = employeeId;
//         this.salary = salary
//     }

//     displayInfo(){
//         console.log(this.name+this.age+this.employeeId+this.salary);
        
//     }
    
// }


// const e = new Emp(1,2500,"john",25);


// e.displayInfo();


// Q7 

// class InvalidAgeNumber extends Error{

    
//     constructor(message){
//         super(message);
//         this.name = "invalid age"
//     }
// }

// function check_age(age){
//     try {
//         if(age>18){
//             console.log("you are eligible");
            
//         }else{
//             throw new InvalidAgeNumber("you are not eliegible")
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
//     }
// }


// console.log(
//  check_age(12))


//  Q8

//  class InvalidAmountError extends Error{

//     constructor(message){
//         super(message);
//         this.name = "invalidAmountError"
//     }
//  }

//  class InsufficentAmountError extends Error{

//     constructor(message){
//         super(message);
//         this.name = "InsufficentAmountError"
//     }
//  }

//  let balance = 5000;
  
//  function withdraw(amount) {
//     try {
        
    
//     if (amount<=0) {
//         throw new InvalidAmountError("Amount is invalid please enter correct amount")
//     } else if(amount>balance) {
//         throw new InsufficentAmountError("Amount is not sufficent ")
//     }else{
//         console.log(this.balance-amount);
        
//     }

 
//  } catch (error) {
//        console.log(this.name+":"+this.message);
        
//     }
// }

//  withdraw(300)


// Q 9

// const taskPromise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("task Completed sucessfully....");
    
//   }, 2000);
// })

// taskPromise.then((message)=>{
//     console.log(message);
    
// })
// .catch((error)=>{
//     console.log("error"+":"+error);
    
// })

// q 10 

// function checkNumber (number) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (number>0) {
//             resolve("psotiveNumber")
//         } else {
//             reject("Invalid number")
//         }
//       }, 2000);
//     })
    
// }

// checkNumber(-10).then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// Q 11

// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host : "localhost",
//     user:"root",
//     password: "root",
//     database: "db1"
// });

// db.connect((err)=>{
//     if (err) {
//         throw err
//     } else {
//         console.log("database connected successfully.........");
        
//     }
// })

// function InsertData(id,name,course,email) {
//     sql = "insert into student values(?,?,?,?,?)"

//     db.query(sql,[id,name,course,email],(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("data inserted ");
            
//         }
//     })


    
// }



// function showData() {
//     sql="select * from student";
//     db.query(sql,(err,result)=>{
//        if (err) {
//          console.log(err);
//        } else {
//         console.log(result);
        
//        }
        
//     })
// }


// function deleteData(id) {
//     sql = "delete from student where id = ?"
//     db.query(sql,[id],(err,result)=>{
//         if (err) {
//             console.log(err);
            
//         } else {
//             console.log("data deleted sucessfully");
            
//         }
//     })
// }


// function UpdateData(id,name) {
//     const sql = "update student set name =? where id =?"
//     db.query(sql,[name,id],(err,result)=>{
//         if (err) {
//             console.log(err);
            
//         } else {

//             console.log("data updated ducessfully");
            
            
//         }
//     })
// }



// function SearchData(data) {
//     const sql = "select * from student where name like ?"

//     db.query(sql,[`%${data }%`],(err,result)=>{
//         if (err) {
//             console.log(err);
            
//         } else {
//             console.log(result);
            
//         }
//     })
// }
// InsertData(3,"shoeb",25,"bsc it","shoeb@gmail.com")
// UpdateData(3,"tom")
// SearchData("t")
// deleteData(2)
// showData()



// Q 12 

// let task2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 1000);
    
// });

// task2.then((result)=>{
//     return result *2;
// }).then((result)=>{
//     return result+5;
// }).then((result)=>{
//     console.log("final result"+result);
    
// }).catch((error)=>{
//     console.log("Error"+error);
    
// })



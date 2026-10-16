// Question 1

class BankAccount{
    accountNumber = 12221223
    accountHolder = "Saurabh"
    balance = 1000
    sum = this.balance

    

    addMoney(n){
        if(n > 0){
            this.sum = this.balance + n
            console.log(this.sum);
            
            
            
        }
        else{
            console.log("Please enter valid amount");
        }
        

    }
    withdrawMoney(n){
        if(n < this.sum){
            console.log(this.sum - n);
            
        }
        else if (n> this.sum){
            console.log("amount should be less then balance");
            
        }
        else if(n <= 0){
            console.log("enter valid amount");
            

        }
    }

    
    

}

const bank = new BankAccount()
bank.addMoney(1000)
bank.withdrawMoney(200)


// Question 2

const arr = [1,2,3,4,5]
const [a1,a2,a3,a4,a5] = arr
console.log(a1);
console.log(a2);

// Question 3

const Emp = {
    "id": "1",
    "name": "Saurabh",
    "salary" : "100000"

}
console.log(Emp.id);
const {id,name,salary} = Emp
console.log(id);
console.log(name);
console.log(salary);

// Question 4
const arr2 = [1,2,6,3,4]

function add (){
    return Math.max(...arr2)
}
console.log(add());

// Question 5

function greet(name="guest"){
    return name
}
console.log(greet());

// Question 6

function add (a,b=10){
    return a + b
}
console.log(add(2,3));
console.log(add(2));

// Question 7

function add(a){
    try {
        return a + b
    } catch (error) {
        console.log(error.name+","+error.message);
        
    }
}
console.log(add(2));

// Question 8 and 9

function person(age){
    try {
        if(age < 18){
        throw new Error("Not eligible for voting")
    }
    else{
        console.log("Eligible for voting");
    }
    } catch (error) {
        console.log(error.name+","+error.message);
        
        
    }
}
console.log(person(17));

// Question 10

function add(a,b){
    try {
        if(b <= 0){
            throw new Error("Second number cannot be zero")
        }
        else{
            return a + b
        }
    } catch (error) {
        console.log(error.name+","+error.message);
        
        
    }
}
console.log(add(2,0));

// Question 11

class InvalidSalaryError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidSalaryError"
    }
}

function salary(salary){
    try {
        if(salary < 0){
            throw new InvalidSalaryError("salary cannot be zero")
        }
        else{
            return salary
        }
    } catch (error) {
        console.log(error.name+","+error.message);
        
    }

}

console.log(salary(-10));

// Question 12

class InvalidUsernameError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidUsernameError"
    }
}
function username(username){
    try {
        if(username == ""){
            throw new InvalidUsernameError("username cannot be empty")
        }
        else{
            return username
        }
    } catch (error) {
        console.log(error.name+","+error.message);
        
    }
}
console.log(username(""));


// Question 13

function first(){
    const pi = 3.14
    console.log(pi);
    pi = 5
    
}
function second(){
    first()
}
function third(){
    try {
        second()
    } catch (error) {
        console.log(error.name+","+error.message);
        
        
    }
}
console.log(third());

// Question 14

function validateAge (age){
    if(age<18){
        throw new Error("Invalid age")
    }
    else {
        return "valid age"
        
    }
}
function registerUser(){
    try {
        validateAge()
    } catch (error) {
        console.log(error.name+","+error.message);
        
    }
}
console.log(registerUser(12));


// Question 15

import {add,subtract,multiply,divide} from "./calculator.js"

console.log(add(2,1));
console.log(subtract(3,1));
console.log(multiply(3,3));
console.log(divide(4,2));


// Question 16


const {Employee} = require('./Emp')

const emp = new Employee(1,"saurabh",1000)
emp.display(1)

// Question 17 and 18

function task(task){
    return new Promise((resolve,reject)=>{
        if(task){
            resolve("Task completed")
        }
        else{
            reject("Task Failed")
        }
    })
}
task(true).then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})
task().then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})


// Question 19

async function task(task){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(task){
            resolve("Task completed")
        }
        else{
            reject("Task Failed")
        }
        }, 2000);
    })
}
task(true).then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})
task().then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})

async function test(){
    try {
        const data = await task()
        console.log(data);
        
    } catch (error) {
        console.log(err);
        
    }
}

test()

// Question 20

 async function task(){
    
    try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        
    }).catch((err)=>{
        console.log(err);
        
    })
    } catch (error) {
        
    }

 }

task()


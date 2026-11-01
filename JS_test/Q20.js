const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"saurabh4245",
    database : "JS",
    
})
db.connect((err)=>{
    if (err) {
        throw err
    }
    console.log("connected");
    
})
function insertData(name,salary){
    const sql = "insert into emp(name,salary) values(?,?)"
    db.query(sql,[name,salary],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Data inserted");
            
        }
    })
}
// insertData("saurabh",100000)

function updateData(name,salary,id){
    const sql = "update emp set name = ?,salary = ? where id = ?"
    db.query(sql,[name,salary,id],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Data updated");
            
        }
    })
}
// updateData("shoeb",100,1)
function searchData(data1){
    const sql = "select * from emp where name like ?"
    db.query(sql,[`${data1}%`],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Searched");
            console.log(result);
            
            
        }
    })
}
searchData("s")
function showData(){
    const sql = "select * from emp"
    db.query(sql,(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Show");
            
            console.log(result);
            
        }
    })
}
// showData()

function deleteData(id){
    const sql = "delete from emp where id = ?"
    db.query(sql,[id],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Deleted");
            
            
            
        }
    })
}
// deleteData(1)
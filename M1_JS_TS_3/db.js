const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"saurabh4245",
    database : "college",
    
})
db.connect((err)=>{
    if (err) {
        throw err
    }
    console.log("connected");
    
})
function insertData(name,age,course,email){
    const sql = "insert into students(name,age,course,email) values(?,?,?,?)"
    db.query(sql,[name,age,course,email],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Data inserted");
            
        }
    })
}
insertData("saurabh",20,"Java","saurabh@gmail.com")

function updateData(name,age,course,email,id){
    const sql = "update students set name = ?,age = ?,course = ?,email = ? where id = ?"
    db.query(sql,[name,age,course,email,id],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Data updated");
            
        }
    })
}
updateData("Satyam",17,"IT","satyam@gmail.com",1)
function searchData(data1){
    const sql = "select * from students where name like ?"
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
    const sql = "select * from students"
    db.query(sql,(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Show");
            
            console.log(result);
            
        }
    })
}
showData()

function deleteData(id){
    const sql = "delete from students where id = ?"
    db.query(sql,[id],(err)=>{
        if (err) {
            throw err
        } else {
            console.log("Deleted");
            
            
            
        }
    })
}
// deleteData(1)
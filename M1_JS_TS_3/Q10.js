function checkNumber(number){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        if(number >0){
            resolve("Positive Number")
        }
        else{
            reject("Negative Number")
        }
    
    }, 2000);
    })
}
checkNumber(100).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
checkNumber(-100).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
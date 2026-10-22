function task(task){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        if(task){
            resolve("Task is completed")
        }
        else{
            reject("Incomple task")
        }
    
    }, 2000);
    })
}
task(true).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
task().then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
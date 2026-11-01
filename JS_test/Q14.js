function store(name,price,availability){
    return new Promise((resolve,reject)=>{
        if (name && price && availability) {
            resolve(name,price,availability);
        }
        else{
            reject("Incomplete")
        }
    })
}
console.log(store("saurabh",1200,true));

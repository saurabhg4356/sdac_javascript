function inventory(n){
    try {
        if(n<5){
        throw new Error("Invalid")
        
    }else{
        console.log(n);
        
    }
    } catch (error) {
        console.log(error.name+","+error.messgae);
        
        
    }
}
inventory(4)
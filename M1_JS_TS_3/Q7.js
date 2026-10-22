class InvalidAgeError extends Error{
    constructor(message){
        super(message)
        this.name = 'InvalidAgeError'
    }
}
function checkAge(age){
    try {
        if(age<18){
        throw new InvalidAgeError("invalid age")
    }
    else{
        console.log("valid age");
        
    }
    } catch (error) {
        console.log(error.name+","+error.message);
        
        
    }
}
checkAge(12)
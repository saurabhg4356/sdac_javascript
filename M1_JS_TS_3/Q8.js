class InvalidAmountError extends Error{
    constructor(message){
        super(message)
        this.name = 'InvalidAmountError'
    }
}
class InsufficientBalanceError extends Error{
    constructor(message){
        super(message)
        this.name = 'InsufficientBalanceError'
    }
}
amount = 1000
function withdrawal(n){
    try {
        if(n<0){
        throw new InvalidAmountError("Amount is invalid")
    }
    else if(n>amount){
        throw new InsufficientBalanceError("Balance Insufficent")
    }
    else{
        console.log(amount-n);
        
    }
    } catch (error) {
        console.log(error.name+","+error.message);
        
    }
}
withdrawal(10000)
withdrawal(-100)
withdrawal(100)
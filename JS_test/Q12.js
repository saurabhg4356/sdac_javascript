class InvalidCouponCode extends Error{
    constructor(message){
        super(message)
        this.name = "InValid Cupon"
    }
}
function couponCode(n){
    try {
        if(n<0){
            throw new InvalidCouponCode("Invalid Coupon")
        }
        else{
            console.log("Coupon code is correct");
            
        }
    } catch (error) {
        console.log(error.name+","+error.message);
        
        
    }

}
couponCode(-1)
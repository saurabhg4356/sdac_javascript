class Product {
    name
    productId
    price

    constructor(name,productId,price){
        this.name = name
        this.productId = productId
        this.price = price
    }
    displayInfo(){
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
        
        
        
    }
}
const p = new Product("Mobile",101,19999)
p.displayInfo()
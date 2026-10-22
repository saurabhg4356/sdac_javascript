abstract class  Productes{
    productID:number
    name:string
    price:number

    constructor(productID:number,name:string,price:number){
        this.productID = productID
        this.name = name
        this.price = price
    }
    abstract calculateFinalPrice():void

    displayInfo():void{
        console.log(this.productID);
        console.log(this.name);
        console.log(this.calculateFinalPrice());
    }
}
class ElectronicProductes extends Productes{
    calculateFinalPrice(): void {
        console.log("Final Price " +(this.price - this.price*10/100));
    }
    displayInfo():void{
        console.log("ElectronicProductes");
        
        console.log("ProductID : "+this.productID);
        console.log("Product name : "+this.name);
        console.log(" Price :"+this.price);
        console.log("Discount :"+this.price*10/100);
        
    
    }
}

class GroceryProduct extends Productes{
    calculateFinalPrice(): void {
        console.log("Final Price " +(this.price - this.price*5/100));
    }
    displayInfo():void{
        console.log("GroceryProduct");
        
        console.log("ProductID : "+this.productID);
        console.log("Product name : "+this.name);
        console.log(" Price :"+this.price);
        console.log("Discount :"+this.price*5/100);
        
    
    }
}
const e1 = new ElectronicProductes(1,"Phone",1000)
e1.displayInfo()
e1.calculateFinalPrice()
const g1 = new GroceryProduct(2,"Milk",30)
g1.displayInfo()
g1.calculateFinalPrice()
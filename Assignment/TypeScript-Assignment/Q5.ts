class Productdiscount {
    price:number
    constructor(price:number){
        this.price = price
    }
    calculateDiscount():void{
       console.log("Product Discount :"+ this.price*5/100);
        console.log(" ");
    }
}
class   ElectronicProducts extends Productdiscount{
    calculateDiscount(): void {
        console.log("Electronic Product Discount : "+this.price*10/100);
        console.log(" ");
    }
}
class  ClothingProduct extends Productdiscount{
    calculateDiscount(): void {
        console.log("Clothing Product Discount "+this.price*15/100);
        console.log(" ");
    }
}

const pDiscount = new Productdiscount(100)
pDiscount.calculateDiscount() 
const eDiscount = new ElectronicProducts(1000)
eDiscount.calculateDiscount()
const eClothing = new ClothingProduct(2000)
eClothing.calculateDiscount()
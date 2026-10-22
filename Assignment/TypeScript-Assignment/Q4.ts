class Products {
    public productID:number = 1
    private price:number = 19999
    protected category:string = "Electronic"
    
    display():void{
        console.log(this.productID);
        console.log(this.price);
        console.log(this.category);
    }
}
class  ElectronicProduct extends Products{
    display():void{
        console.log("ElectronicProduct :");
        
        console.log(this.productID);
        console.log(this.category);
    }
    
}
const product = new Products()
product.display()

const electronic = new ElectronicProduct()
electronic.display()
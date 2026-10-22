class Product{
    productID:number;
    name:string;
    price:number;
    category:string;

    constructor(productID:number,name:string,price:number,category:string){
        this.productID = productID
        this.name = name
        this.price = price
        this.category = category
    
    }
    display():void{
        console.log(this.productID+","+this.name+","+this.price+","+this.category);
        
    }


    
}
const p1 = new Product(1,"Phone",120000,"Electronic")
const p2 = new Product(2,"Laptop",119999,"Electronic")
const p3 = new Product(3,"Earphone",1200,"Electronic")
p1.display()
p2.display()
p3.display()
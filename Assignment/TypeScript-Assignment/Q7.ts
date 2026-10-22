interface IProduct{
    productID:number
    name:string
    price:number
    category:string

    

}
class Productss implements IProduct{
    productID: number
    name: string
    price: number
    category: string

    constructor( productID:number,name:string,price:number,category:string){
        this.productID = productID
        this.name = name
        this.price = price
        this.category = category
    }

    PrintProduct():void{
        console.log(this.productID,this.name,this.price,this.category);
        
        
    }
}
const p4 = new Productss(1,"phone",199999,"Electronic")
p4.PrintProduct()
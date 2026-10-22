class CompanyProduct{
    static companyName:string = "TechStore"
    static displayCompany():void {
        console.log("Company Name :"+CompanyProduct.companyName);
        
    }
    productID:number 
    name:string
    price:number
    constructor(productID:number,name:string,price:number){
        this.productID = productID
        this.name = name
        this.price = price
    }
    displayInfo():void {
        console.log("productID : "+this.productID+" name :"+this.name+" Price :"+this.price);
        
    }
    
}
const cp1 = new CompanyProduct(1,"Phone",19999)
const cp2 = new CompanyProduct(2,"Earphone",1999)
CompanyProduct.displayCompany()
cp1.displayInfo()
cp2.displayInfo()

function order(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("order1")
        }, 2000);
    })
}
async function OrderHistory(){

    let orders = await order();
    console.log(orders);
    
}
OrderHistory();
// // const students = [
// //   { name: "Amit", marks: [80, 75, 90] },
// //   { name: "Neha", marks: [35, 40, 30] },
// //   { name: "Raj", marks: [90, 95, 85] },
// //   { name: "Priya", marks: [60, 70, 65] }
// // ];

// // // const totalMarks = students.reduce((students,total)=>{
// // //     students.marks + total,0
// // // })

// // // const Marks = students.map(totalMarks)
// // // console.log(totalMarks);

// // const total = students.map((n)=>{
// //   const Markstotal = n.marks.reduce((sum,mark)=> sum + mark,0
// // )
// // // console.log(Markstotal);

// // const average = Markstotal/n.marks.length;

// // // console.log(average);

// // function result(average){
// //   if(average<35){
    
// //     // console.log("Fail");
    
// //   }
// //   else{
// //     return {
// //       name : n.name,
// //       average : average,
// //       total : Markstotal,
// //       marks : n.marks,
// //       result : result

// //     }
// //     // console.log("Pass");
    
// //   }
// // }

// // console.log(result);

// // // const pass = average.map(average)
// // // console.log(pass);

// // // const passResult = average.filter(result)
// // // console.log(...passResult);


// // // console.log(result());



// // })



// // const students = [
// //     { name: "Amit", marks: [80, 75, 90] },
// //     { name: "Neha", marks: [35, 40, 30] },
// //     { name: "Raj", marks: [90, 95, 85] },
// //     { name: "Priya", marks: [60, 70, 65] }
// // ];

// // // 1. Calculate total, average, and result
// // const studentResults = students.map(student => {
// //     const total = student.marks.reduce(
// //         (sum, mark) => sum + mark, 0
// //     );

// //     const average = total / student.marks.length;

// //     const result = student.marks.every(mark => mark >= 35)
// //         ? "Pass"
// //         : "Fail";

// //     return {
// //         name: student.name,
// //         marks: student.marks,
// //         total: total,
// //         average: average,
// //         result: result
// //     };
// // });

// // // Display all student results
// // console.log("Student Results:");

// // studentResults.forEach(student => {
// //     console.log(
// //         `${student.name} - Total: ${student.total}, ` +
// //         `Average: ${student.average.toFixed(2)}, ` +
// //         `Result: ${student.result}`
// //     );
// // });

// // // 2. Filter students who passed and have average > 70
// // const qualifyingStudents = studentResults.filter(
// //     student => student.result === "Pass" &&
// //                student.average > 70
// // );

// // console.log("\nQualifying Students:");

// // qualifyingStudents.forEach(student => {
// //     console.log(student.name);
// // });

// // // 3. Find the topper
// // const topper = studentResults.reduce((highest, student) => {
// //     return student.average > highest.average
// //         ? student
// //         : highest;
// // });

// // console.log("\nTopper:", topper.name);
// // console.log("Topper Average:", topper.average.toFixed(2));

// // // 4. Calculate class average
// // const totalAverage = studentResults.reduce(
// //     (sum, student) => sum + student.average, 0
// // );

// // const classAverage = totalAverage / studentResults.length;

// // console.log("\nClass Average:", classAverage.toFixed(2));



// // Question 2

// // Shopping Cart Billing System

// // Topics: Classes, objects, map(), filter(), reduce(), default parameters
// // const cart = [
// //   { name: "Keyboard", price: 1200, quantity: 2 },
// //   { name: "Mouse", price: 500, quantity: 3 },
// //   { name: "Monitor", price: 8000, quantity: 1 },
// //   { name: "USB Cable", price: 200, quantity: 4 }
// // ];


// // Create a function calculateBill(cart, discount = 0) that:
// // 1. Calculates the total price of every product using its quantity.
// // 2. Applies a discount percentage to the total.
// // 3. Adds 18% GST after applying the discount.
// // 4. Returns the subtotal, discount amount, GST amount, and final bill.
// // 5. Lists products whose total item value exceeds ₹1,000.
// // Extra challenge: Create a ShoppingCart class with methods to add products, remove products by name, and calculate the final bill.

// // Watch the order of calculations: discount first, GST second.

 
// const cart = [
//     { name: "Keyboard", price: 1200, quantity: 2 },
//     { name: "Mouse", price: 500, quantity: 3 },
//     { name: "Monitor", price: 8000, quantity: 1 },
//     { name: "USB Cable", price: 200, quantity: 4 }
// ];

// // Function to calculate the bill
// // function calculateBill(cart, discount = 0) {

// //     // 1. Calculate subtotal
// //     const subtotal = cart.reduce((total, product) => {
// //         return total + product.price * product.quantity;
// //     }, 0);

// //     // 2. Calculate discount amount
// //     const discountAmount = subtotal * (discount / 100);

// //     // 3. Calculate amount after discount
// //     const discountedTotal = subtotal - discountAmount;

// //     // 4. Calculate GST after discount
// //     const gstAmount = discountedTotal * 0.18;

// //     // 5. Calculate final bill
// //     const finalBill = discountedTotal + gstAmount;

// //     // 6. Find products whose total item value exceeds ₹1,000
// //     const expensiveProducts = cart.filter(product => {
// //         return product.price * product.quantity > 1000;
// //     });

// //     // Return all bill details
// //     return {
// //         subtotal: subtotal,
// //         discountAmount: discountAmount,
// //         gstAmount: gstAmount,
// //         finalBill: finalBill,
// //         expensiveProducts: expensiveProducts
// //     };
// // }

// // // Calculate bill with 10% discount
// // const bill = calculateBill(cart, 10);

// // console.log("Subtotal: ₹" + bill.subtotal.toFixed(2));
// // console.log("Discount: ₹" + bill.discountAmount.toFixed(2));
// // console.log("GST (18%): ₹" + bill.gstAmount.toFixed(2));
// // console.log("Final Bill: ₹" + bill.finalBill.toFixed(2));

// // console.log("\nProducts with total item value above ₹1,000:");

// // bill.expensiveProducts.forEach(product => {
// //     console.log(
// //         product.name + ": ₹" +
// //         (product.price * product.quantity).toFixed(2)
// //     );
// // });

// // class ShoppingCart {
// //     constructor() {
// //         this.cart = [];
// //     }

// //     // Add a product to the cart
// //     addProduct(name, price, quantity) {
// //         if (price <= 0 || quantity <= 0) {
// //             throw new Error("Price and quantity must be positive.");
// //         }

// //         this.cart.push({ name, price, quantity });
// //         console.log(name + " added to cart.");
// //     }

// //     // Remove a product by name
// //     removeProduct(name) {
// //         const index = this.cart.findIndex(product =>
// //             product.name.toLowerCase() === name.toLowerCase()
// //         );

// //         if (index === -1) {
// //             throw new Error("Product not found: " + name);
// //         }

// //         this.cart.splice(index, 1);
// //         console.log(name + " removed from cart.");
// //     }

// //     // Calculate bill using the existing function
// //     calculateBill(discount = 0) {
// //         return calculateBill(this.cart, discount);
// //     }

// //     // Display cart products
// //     displayCart() {
// //         this.cart.forEach(product => {
// //             console.log(
// //                 product.name +
// //                 " | Price: ₹" + product.price +
// //                 " | Quantity: " + product.quantity
// //             );
// //         });
// //     }
// // }

// // // Test the class
// // const myCart = new ShoppingCart();

// // myCart.addProduct("Keyboard", 1200, 2);
// // myCart.addProduct("Mouse", 500, 3);
// // myCart.addProduct("Monitor", 8000, 1);

// // console.log("\nMy Cart:");
// // myCart.displayCart();

// // console.log("\nMy Bill:");
// // const myBill = myCart.calculateBill(10);

// // console.log("Subtotal: ₹" + myBill.subtotal.toFixed(2));
// // console.log("Discount: ₹" + myBill.discountAmount.toFixed(2));
// // console.log("GST: ₹" + myBill.gstAmount.toFixed(2));
// // console.log("Final Bill: ₹" + myBill.finalBill.toFixed(2));

// // console.log("\nRemoving Mouse...");
// // myCart.removeProduct("Mouse");

// // console.log("\nUpdated Cart:");
// // myCart.displayCart();


// function calculateBill(cart, discount = 0){

//     const totalPrice = cart.reduce((total,product)=>{
//         return total + product.price * product.quantity
//     },0)
//     // console.log(totalPrice);

//     const discounted = totalPrice * (discount/100)
//     // console.log(discounted);
//     const total_discount = totalPrice - discounted

//     const gstAdded = total_discount * 0.18

//     const gst_price = gstAdded + total_discount
//     // console.log(gst_price);

//     const productList = cart.filter(product =>{
//         return product.price * product.quantity > 1000
//     })
//     console.log(...productList);
       
// }
// calculateBill(cart,10)


// class ShoppingCart {
//     constructor(){
//         this.cart = [];
//     }
    
//     addproducts(name,price,quantity){
//         if(price<0 || quantity<0){
//             throw new Error ("price and quantity can't be negative")
//         }
//         else{
//             this.cart.push({name,price,quantity})
//             console.log(name +" producrt added");
            
//         }
//     }
//     removeProduct(name){
//         const index = this.cart.findIndex(product=>
//             product.name.toLowerCase() === name.toLowerCase()
//         );
//         if(index === -1){
//             throw new Error("Product not found")

//         }
//         this.cart.splice(index,1)

//     }
//     displayProducts(){
//         this.cart.forEach(product=>{
//             console.log(product.name,product.price,product.quantity);
            
//         })
//     }
// }

// const shopping = new ShoppingCart()
// shopping.addproducts("iphone",100,2)
// shopping.addproducts("cover",200,3)

// shopping.removeProduct("cover")

// shopping.displayProducts()

// Question 3

// const employees = [
//     { id: 1, name: "Aman", salary: 25000, department: "IT" },
//     { id: 2, name: "Riya", salary: 45000, department: "HR" },
//     { id: 3, name: "Karan", salary: 60000, department: "IT" },
//     { id: 4, name: "Sneha", salary: 35000, department: "IT" },
//     { id: 5, name: "Vijay", salary: 20000, department: "HR" }
// ];

// const itDepart = employees.filter(it=>{
//     return it.department == "IT"
// })
// // console.log(itDepart);

//     const lessSalary = employees.filter(less=>{
//         return less.salary < 40000
//     })
    

//     const salaryIncrement = lessSalary.map(sal=>{
//         return sal.salary + (sal.salary * (10/100))
//     })
//     // console.log(salaryIncrement);

//     const updateSalary = employees.map(employee=>{
//         const {id,name,salary,department} = employee

    
//         const updateSal = salary < 4000 
//         ? salary * 1.10 
//         : salary;
//     return {
//         id,
//         name,
//         salary : updateSal,
//         department 
        
//     }

//     //      const lessSalary = employee.filter(less=>{
//     //     return less.salary < 40000 })
        
//     //     const salaryIncrement = lessSalary.map(sal=>{
//     //     return sal.salary + (sal.salary * (10/100))
//     // })

//     //     console.log(lessSalary);
        
//     })

// //     console.log("Updated IT Employee Salaries:");

// // updateSalary.forEach(({ name, salary }) => {
// //     console.log(`${name}: ₹${salary.toFixed(2)}`);
// // });

// const totalSalary  = updateSalary.reduce((total,{salary})=> total + salary ,0);
    
// // console.log(totalSalary);

// const salaries = updateSalary.map(({salary})=> salary)

// let highest = -Infinity
// let secondhighest = -Infinity
// for(const salary of salaries){
//     if(salary > highest){
//         secondhighest = highest
//         highest = salary
//     }
//     else if(salary < highest && salary > secondhighest){
//         secondhighest = salary
//     }
// }
// if(secondhighest === -Infinity){
//     console.log(" secondhighest doesn't exit");
    
// }


// console.log(highest,secondhighest);


// Question 4

// class InsufficientBalanceError extends Error{
//     constructor(message){
//         super(message)
//         this.name = "InSufficient Balance"
//     }
// }
// class BankAccount {
//     accountHolder
//     balance
//     totalBalance
//     transactions = []
//     constructor(accountHolder,balance){

//         if(balance< 1){
//             throw new Error("Initial balance cannot be zero or negative")
//         }
//         this.accountHolder = accountHolder
//         this.balance = balance
//     }

//     deposit(amount){
//         if (amount < 1) {
//             console.log("Amount should not be zero or negative");
            
//         }
//         else{
//             this.totalBalance = this.balance + amount
//             this.transactions.push({
//                 type : "Deposit",
//                 amount : amount,
//                 balanceAfterTransaction : this.totalBalance
//             })
//             console.log(amount + " deposited succesfully");
            
//         }
//     }
//     withdraw(amount){
//         try {
//             if(amount > this.totalBalance){
//             throw new InsufficientBalanceError("InSufficient balance to withdraw")
//         }
//         else if(amount < 1){
//             console.log("Amount should not be zero or negative");
//         }
//         else{
//             this.totalBalance = this.totalBalance - amount
//             this.transactions.push({
//                 type : "Withdraw",
//                 amount : amount,
//                 balanceAfterTransaction : this.totalBalance
//             })
//             console.log(amount +" Withdraw succesfully");
            
//         }
//         } catch (error) {
//             console.log(error.name+","+error.message);
            
//         }
        

//     }
//     getTransactionHistory(){
//         return this.transactions.map(transaction=> ({
//             ...transaction
//         }))
        
//         console.log("Amount deposited by the accountHolder :"+this.balance);

        
//     }
    
// }
// const account = new BankAccount("Saurabh", 5000);

// account.deposit(2000);
// account.withdraw(1500);
// account.withdraw(10000);
// account.deposit(-500);
// console.log(account.totalBalance);

// // console.log(getTransactionHistory());
// console.log(account.getTransactionHistory());


// Question 5

// const inventory = [
//   { id: 101, name: "Laptop", stock: 5, price: 45000 },
//   { id: 102, name: "Phone", stock: 0, price: 18000 },
//   { id: 103, name: "Headphones", stock: 3, price: 1500 },
//   { id: 104, name: "Keyboard", stock: 10, price: 1200 }
// ];

// const outofStock = inventory.filter(n=>{
//     if(n.stock == 0){
//         return n
//     }
// })
// // console.log(outofStock);
 
// const totalInventory = inventory.map((total)=>{
//     return total.stock * total.price
// })
// // console.log(totalInventory);
// const totalInventoryPrice = totalInventory.reduce((sum, total )=> sum + total,0)
// // console.log(totalInventoryPrice);

// function replStock(productID,incstock){
//      const prid = inventory.filter(pid=>{
//             return pid.id == productID

//         })
//         console.log(prid);
//         const increaseStock = prid.map((st)=>{
//             return st.stock + incstock
//         })
//         return {
//             prid = 
//         }
        
        
        
//     // try {
//     //     if(prid.id != productID){
//     //     throw new Error("Product Id doesn't exit")
//     // }
//     // else{
//     //     // const prid1 = inventory.filter(pid=>{
//     //     //     return pid.id == productID
//     //     // })
//     //     const increaseStock = prid.map((st)=>{
//     //         return st.stock + incstock
//     //     })
//     // }
//     // } catch (error) {
//     //     console.log(error.name+" , "+error.message);
        
        
//     // }
// }
// console.log(inventory);
// console.log(replStock(101,3));
// console.log(inventory);



// const Replenishes = inventory.map((replStock)=>{
//     return replStock.stock + 3
// })
// console.log(Replenishes);


// const inventory = [
//     { id: 101, name: "Laptop", stock: 5, price: 45000 },
//     { id: 102, name: "Phone", stock: 0, price: 18000 },
//     { id: 103, name: "Headphones", stock: 3, price: 1500 },
//     { id: 104, name: "Keyboard", stock: 10, price: 1200 }
// ];

// class InventoryManager {
//     constructor(products) {
//         // Copy the products so the original inventory is not modified
//         this.inventory = products.map(product => ({ ...product }));
//     }

//     // 1. Find products that are out of stock
//     getOutOfStockProducts() {
//         return this.inventory.filter(product => product.stock === 0);
//     }

//     // 2. Calculate the total inventory value
//     getTotalInventoryValue() {
//         return this.inventory.reduce((total, product) => {
//             return total + product.stock * product.price;
//         }, 0);
//     }

//     // 3. Replenish stock for a product
//     replenishStock(productId, quantity) {
//         // Validate the quantity first
//         if (!Number.isInteger(quantity) || quantity <= 0) {
//             throw new Error(
//                 "Replenishment quantity must be a positive integer."
//             );
//         }

//         // Find the product
//         const product = this.inventory.find(
//             item => item.id === productId
//         );

//         // Validate the product ID
//         if (!product) {
//             throw new Error("Product ID not found: " + productId);
//         }

//         // Update stock only after validation succeeds
//         product.stock += quantity;

//         console.log(
//             `${product.name} replenished by ${quantity} units.`
//         );

//         return { ...product };
//     }

//     // 4. Find products with stock below 5
//     getLowStockProducts() {
//         return this.inventory.filter(product => product.stock < 5);
//     }

//     // 5. Generate a low-stock report
//     getLowStockReport() {
//         return this.getLowStockProducts().map(
//             ({ name, stock, price }) => ({
//                 name,
//                 stock,
//                 price
//             })
//         );
//     }

//     // Display inventory
//     displayInventory() {
//         console.table(this.inventory);
//     }
// }

// // Create the inventory manager
// const manager = new InventoryManager(inventory);

// // Task 1: Out-of-stock products
// console.log("Out-of-Stock Products:");
// console.table(manager.getOutOfStockProducts());

// // Task 2: Total inventory value
// console.log(
//     "Total Inventory Value: ₹" +
//     manager.getTotalInventoryValue().toLocaleString("en-IN")
// );

// // Task 3: Replenish stock
// try {
//     manager.replenishStock(102, 10);
// } catch (error) {
//     console.log("Error:", error.message);
// }

// // Task 4: Products with stock below 5 after replenishment
// console.log("\nLow-Stock Products:");
// console.table(manager.getLowStockProducts());

// // Task 5: Low-stock report
// console.log("\nLow-Stock Report:");
// console.table(manager.getLowStockReport());

// // Task 6: Test invalid operations
// try {
//     manager.replenishStock(999, 5);
// } catch (error) {
//     console.log("Error:", error.message);
// }

// try {
//     manager.replenishStock(101, -3);
// } catch (error) {
//     console.log("Error:", error.message);
// }

// // Confirm final inventory
// console.log("\nFinal Inventory:");
// manager.displayInventory();

// // Confirm original inventory is unchanged
// console.log("\nOriginal Inventory:");
// console.table(inventory);

// Question 6

// result is the object being built.
// order is the current order being processed.
// result[category] accesses a property dynamically, such as result["Electronics"].
// count++ increases the number of orders in that category.
// total += order.amount adds the current order amount.
// {} is the initial empty object.
// object.entries() = it convert the group object into array of key-value pairs
// onject.values() = this give only the category details , without their names. we use to add all category total together
// object.fromEntries() = filters return array of entries , object.fromEntries convert the filtered entries back in to object , prserving the category names
// const orders = [
//     { id: 1, category: "Electronics", amount: 5000 },
//     { id: 2, category: "Clothing", amount: 1500 },
//     { id: 3, category: "Electronics", amount: 3000 },
//     { id: 4, category: "Food", amount: 500 },
//     { id: 5, category: "Clothing", amount: 2500 },
//     { id: 6, category: "Food", amount: 1000 }
// ];

// // 1. Group orders by category using reduce()
// function groupOrders(orders) {
//     return orders.reduce((result, order) => {
//         const category = order.category;

//         // Create a category if it doesn't exist
//         if (!result[category]) {
//             result[category] = {
//                 count: 0,
//                 total: 0
//             };
//         }

//         // Update the category's count and total
//         result[category].count++;
//         result[category].total += order.amount;

//         return result;
//     }, {});
// }

// console.log(groupOrders(orders));
// const groupedOrders = groupOrders(orders);

// console.log("Grouped Orders:");
// console.log(groupedOrders);


// // 2. Find the category with the highest sales
// function getHighestSalesCategory(groupedOrders) {
//     return Object.entries(groupedOrders).reduce(
//         (highest,current)=>{
//             if(current[1].total > highest[1].total){
//                 return current
//             }
//             return highest
//         }
//     )
// }

// const highestCategory = getHighestSalesCategory(groupedOrders);

// console.log("\nHighest Sales Category:");
// console.log(highestCategory[0], highestCategory[1].total,highestCategory[1].count);


// // // 3. Calculate total sales across all categories
// function getTotalSales(groupedOrders) {
//     return Object.values(groupedOrders).reduce(
//         (total, category) => total + category.total,
//         0
//     );
// }

// console.log("\nTotal Sales: ₹" + getTotalSales(groupedOrders));


// // // 4. Return categories with sales greater than ₹2,000
// function getCategoriesAbove2000(groupedOrders) {
//     return Object.fromEntries(
//         Object.entries(groupedOrders).filter(
//             ([category, details]) => details.total > 2000
//         )
//     );
// }

// console.log("\nCategories Above ₹2,000:");
// console.log(getCategoriesAbove2000(groupedOrders));

// Question 7


// function delayOneSecond() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000);
//     });
// }

// // Step 1: Check stock
// async function checkStock(productId) {
//     await delayOneSecond();

//     // Simulate stock availability
//     const availableProducts = [101, 102, 103];

//     if (!availableProducts.includes(productId)) {
//         throw new Error(`Product ${productId} is out of stock.`);
//     }

//     console.log(`1. Stock check successful for product ${productId}.`);
//     return true;
// }

// // Step 2: Process payment
// async function processPayment(amount) {
//     await delayOneSecond();

//     if (amount <= 0) {
//         throw new Error("Payment amount must be positive.");
//     }

//     console.log(`2. Payment successful: ₹${amount}.`);
//     return true;
// }

// // Step 3: Ship order
// async function shipOrder(orderId) {
//     await delayOneSecond();

//     const confirmation = `SHIP-${orderId}`;

//     console.log(`3. Order shipped. Confirmation: ${confirmation}`);
//     return confirmation;
// }

// // Main order processing function
// async function processOrder(orderId, productId, amount) {
//     console.log(`\nProcessing order ${orderId}...`);

//     try {
//         // Each step waits for the previous step to finish
//         await checkStock(productId);

//         await processPayment(amount);

//         const shippingConfirmation = await shipOrder(orderId);

//         console.log(`Order ${orderId} status: SUCCESS`);
//         return {
//             orderId,
//             status: "SUCCESS",
//             shippingConfirmation
//         };

//     } catch (error) {
//         console.log(`Order ${orderId} failed: ${error.message}`);

//         return {
//             orderId,
//             status: "FAILED",
//             error: error.message
//         };

//     } finally {
//         console.log("Order process finished");
//     }
// }

// // Test 1: Successful order
// // Product 101 is available and payment is positive
// // Test 2: Failed stock validation
// // Product 999 is not available

// async function runTests() {
//     await processOrder("ORD-001", 101, 2500);

//     await processOrder("ORD-002", 999, 1500);
// }

// runTests();
// function delayOne(){
//     return new Promise(resolve=>{
//         setTimeout(resolve,3000)}
//     )
// }
// async function checkone(){
//     await delayOne()
//     console.log("one Second");
    

// }
// checkone()

// Question 8


// const API_URL = "https://jsonplaceholder.typicode.com/users";

// // Function 1: Fetch data from API
// async function fetchUsers() {
//     try {
//         const response = await fetch(API_URL);

//         // Check HTTP response
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const users = await response.json();

//         // Validate API response
//         if (!Array.isArray(users)) {
//             throw new Error("Invalid API response. Expected an array.");
//         }

//         return users;

//     } catch (error) {
//         throw new Error("Fetching users failed: " + error.message);
//     }
// }


// // // Function 2: Transform and analyze data
// function analyzeUsers(users) {

//     // Extract name, email and city
//     const extractedUsers = users.map(user => {
//         if (!user.address || typeof user.address.city !== "string") {
//             throw new Error("Invalid user data: city is missing.");
//         }

//         return {
//             name: user.name,
//             email: user.email,
//             city: user.address.city
//         };
//     });

//     // Exclude South Christy and Gwenborough
//     const filteredUsers = extractedUsers.filter(user =>
//         user.city !== "South Christy" &&
//         user.city !== "Gwenborough"
//     );

//     // Group users by city and count
//     const cityCounts = filteredUsers.reduce((result, user) => {

//         const city = user.city;

//         if (!result[city]) {
//             result[city] = 0;
//         }

//         result[city]++;

//         return result;

//     }, {});

//     return {
//         filteredUsers,
//         cityCounts
//     };
// }


// // Main asynchronous function
// async function main() {
//     try {
//         console.log("Fetching users...");

//         const users = await fetchUsers();

//         console.log("Users fetched successfully!");

//         const result = analyzeUsers(users);

//         console.log("\nFiltered Users:");
//         console.table(result.filteredUsers);

//         console.log("\nCity-wise User Count:");
//         console.log(result.cityCounts);

//         console.log(
//             "\nTotal Remaining Users:",
//             result.filteredUsers.length
//         );

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// main();


// // async function fetchUser(){
// //     try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/users")
// //     if(!response.ok){
// //         throw new Error("no data found")
// //     }
// //     const user = await response.json()

// //     if(!Array.isArray(user)){
// //         throw new Error("array is not found")
// //     }
// //     return user
// //     } catch (error) {
// //         console.log(error.message);
        
        
// //     }
// // }
// // console.log(fetchUser());

// async const analyzedUser(users){
//     const getUser = users.map(user =>{
//         return {
//             namre : user.name,
//             city : user.address.city
//         }
//     })

//     const onlycity = getUser.filter(user=>
//         user.city !== "mumbai" && 
//         user.city !== "pune"
//     )

//     const yserget = onlycity.reduce((result,user)=>{
//         const city = user.city

//         if(!result[city]){
//             result[city] = 0
//         }

//         result[city]++

//         return result
//     },{})
// }

// Question 9


// // Custom error class for username
// class InvalidUsernameError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "InvalidUsernameError";
//     }
// }

// // Custom error class for email
// class InvalidEmailError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "InvalidEmailError";
//     }
// }

// // Custom error class for age
// class InvalidAgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "InvalidAgeError";
//     }
// }

// // Custom error class for password
// class InvalidPasswordError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "InvalidPasswordError";
//     }
// }

// // Custom error class for role
// class InvalidRoleError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "InvalidRoleError";
//     }
// }

// // Custom error class to collect all validation errors
// class RegistrationValidationError extends Error {
//     constructor(errors) {
//         super("User registration failed. Please fix the following errors:");
//         this.name = "RegistrationValidationError";
//         this.errors = errors;
//     }
// }


// // Registration function
// function registerUser({
//     username,
//     email,
//     age,
//     password,
//     role = "user"
// }) {
//     const errors = [];

//     // 1. Validate username
//     if (typeof username !== "string" || username.trim().length < 5) {
//         errors.push(
//             new InvalidUsernameError(
//                 "Username must contain at least 5 characters."
//             )
//         );
//     }

//     // 2. Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (typeof email !== "string" || !emailPattern.test(email)) {
//         errors.push(
//             new InvalidEmailError(
//                 "Email must contain @ and a valid-looking domain."
//             )
//         );
//     }

//     // 3. Validate age
//     if (typeof age !== "number" || !Number.isFinite(age) || age < 18) {
//         errors.push(
//             new InvalidAgeError(
//                 "Age must be at least 18."
//             )
//         );
//     }

//     // 4. Validate password
//     const passwordPattern = /^(?=.*\d).{8,}$/;

//     if (
//         typeof password !== "string" ||
//         !passwordPattern.test(password)
//     ) {
//         errors.push(
//             new InvalidPasswordError(
//                 "Password must contain at least 8 characters and one number."
//             )
//         );
//     }

//     // 5. Validate role
//     if (role !== "user" && role !== "admin") {
//         errors.push(
//             new InvalidRoleError(
//                 'Role must be either "user" or "admin".'
//             )
//         );
//     }

//     // Throw all errors together
//     if (errors.length > 0) {
//         throw new RegistrationValidationError(errors);
//     }

//     // Registration successful
//     return {
//         username,
//         email,
//         age,
//         role,
//         status: "Registered successfully"
//     };
// }


// // Test users
// const users = [
//     {
//         username: "Saurabh",
//         email: "saurabh@gmail.com",
//         age: 22,
//         password: "JavaScript123"
//         // Role defaults to "user"
//     },
//     {
//         username: "Sam",
//         email: "samgmail.com",
//         age: 22,
//         password: "password123"
//     },
//     {
//         username: "Rahul",
//         email: "rahul@gmail.com",
//         age: 16,
//         password: "password"
//     },
//     {
//         username: "Priya",
//         email: "priya@gmail.com",
//         age: 25,
//         password: "Welcome123",
//         role: "manager"
//     }
// ];


// // Calling function and handling errors
// function testRegistration() {

//     users.forEach((user, index) => {
//         console.log(`\nTesting User ${index + 1}:`);

//         try {
//             const registeredUser = registerUser(user);

//             console.log("SUCCESS:", registeredUser);

//         } catch (error) {

//             if (error instanceof RegistrationValidationError) {
//                 console.log(error.message);

//                 error.errors.forEach(validationError => {
//                     console.log(
//                         `${validationError.name}: ${validationError.message}`
//                     );
//                 });

//             } else {
//                 console.log("Unexpected error:", error.message);
//             }
//         }
//     });
// }

// testRegistration();

// Question 10


const orders = [
    {
        id: 1,
        customer: "Amit",
        items: [
            { name: "Laptop", price: 40000, quantity: 1 },
            { name: "Mouse", price: 500, quantity: 2 }
        ],
        status: "delivered"
    },
    {
        id: 2,
        customer: "Neha",
        items: [
            { name: "Phone", price: 20000, quantity: 1 }
        ],
        status: "pending"
    },
    {
        id: 3,
        customer: "Raj",
        items: [
            { name: "Keyboard", price: 1500, quantity: 2 },
            { name: "Monitor", price: 10000, quantity: 1 }
        ],
        status: "delivered"
    }
];


// 1. Custom error class
class InvalidOrderError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOrderError";
    }
}


// 2. Asynchronous order loading
function loadOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders loaded successfully!");
            resolve(orders);
        }, 1000);
    });
}


// 3. Order Analyzer class
class OrderAnalyzer {

    constructor(orders) {

        // Create copies to protect original order data
        this.orders = orders.map(order => ({
            ...order,
            items: order.items.map(item => ({ ...item }))
        }));

        // Validate order data
        this.validateOrders();
    }


    // Validate negative or invalid prices and quantities
    validateOrders() {

        this.orders.forEach(order => {

            order.items.forEach(item => {

                if (
                    !Number.isFinite(item.price) ||
                    !Number.isFinite(item.quantity) ||
                    item.price < 0 ||
                    item.quantity < 0
                ) {
                    throw new InvalidOrderError(
                        `Invalid price or quantity in order ${order.id}: ${item.name}`
                    );
                }

            });

        });

    }


    // Calculate the value of one order
    calculateOrderTotal(order) {

        return order.items.reduce((total, item) => {

            return total + (item.price * item.quantity);

        }, 0);

    }


    // 1. Calculate total value of every order
    getAllOrderTotals() {

        return this.orders.map(({ id, customer, status, items }) => ({

            id,
            customer,
            status,
            total: this.calculateOrderTotal({ items })

        }));

    }


    // 2. Filter delivered orders worth more than ₹5,000
    getHighValueDeliveredOrders() {

        return this.getAllOrderTotals().filter(order =>

            order.status === "delivered" &&
            order.total > 5000

        );

    }


    // 3. Calculate revenue from delivered orders only
    getDeliveredRevenue() {

        return this.getAllOrderTotals()
            .filter(order => order.status === "delivered")
            .reduce((total, order) => {

                return total + order.total;

            }, 0);

    }


    // 4. Find customer who spent the most
    getHighestSpendingCustomer() {

        const customerSpending = this.getAllOrderTotals()
            .reduce((result, order) => {

                const customer = order.customer;

                result[customer] =
                    (result[customer] || 0) + order.total;

                return result;

            }, {});

        return Object.entries(customerSpending).reduce(
            (highest, current) => {

                if (current[1] > highest[1]) {
                    return current;
                }

                return highest;

            }
        );
    }


    // 5. Find most frequently purchased product
    getMostPurchasedProduct() {

        const productQuantities = this.orders
            .flatMap(order => order.items)
            .reduce((result, item) => {

                const product = item.name;

                result[product] =
                    (result[product] || 0) + item.quantity;

                return result;

            }, {});

        const mostPurchased = Object.entries(productQuantities)
            .reduce((highest, current) => {

                if (current[1] > highest[1]) {
                    return current;
                }

                return highest;

            });

        return {
            name: mostPurchased[0],
            quantity: mostPurchased[1]
        };

    }

}


// 4. Main asynchronous function
async function main() {

    try {

        console.log("Starting Order Analyzer...\n");

        // Wait for orders to load
        const loadedOrders = await loadOrders();

        // Create analyzer
        const analyzer = new OrderAnalyzer(loadedOrders);


        // 1. All order totals
        console.log("\n1. Order-wise Total:");
        console.table(analyzer.getAllOrderTotals());


        // 2. Delivered orders above ₹5,000
        console.log("\n2. High-Value Delivered Orders:");
        console.table(analyzer.getHighValueDeliveredOrders());


        // 3. Delivered revenue
        console.log("\n3. Total Delivered Revenue:");

        console.log(
            "₹" + analyzer.getDeliveredRevenue().toLocaleString("en-IN")
        );


        // 4. Highest spending customer
        const highestCustomer =
            analyzer.getHighestSpendingCustomer();

        console.log("\n4. Highest Spending Customer:");

        console.log(
            `${highestCustomer[0]} spent ₹${highestCustomer[1].toLocaleString("en-IN")}`
        );


        // 5. Most purchased product
        const popularProduct =
            analyzer.getMostPurchasedProduct();

        console.log("\n5. Most Purchased Product:");

        console.log(
            `${popularProduct.name} - ${popularProduct.quantity} units`
        );


        console.log("\nOrder Analysis Completed Successfully!");

    } catch (error) {

        if (error instanceof InvalidOrderError) {

            console.error("Order Validation Error:", error.message);

        } else {

            console.error("Unexpected Error:", error.message);

        }

    }

}


// Start application
main();

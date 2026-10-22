class BankAccount{
    accountHolder
    balance
    totalBalance
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder
        this.balance = balance
    }
    
    
    deposit(n){
        if(n<0){
        console.log("Cannot deposite negative ");
        
    }
    else{
        console.log("Balance : "+this.balance);
        
        this.totalBalance = this.balance + n
        console.log("Balanace Added:"+n);
        
        // console.log(this.totalBalance);
        
    }
    }
    withdraw(n){
        if(n<0){
            console.log("Please input valid number");
            
        }
        else if(this.totalBalance <n){
            console.log("Isufficent Balance!, Your balance is "+this.totalBalance);
            
        }
        else{
            this.totalBalance = this.totalBalance - n
            console.log("withdrawl Money :"+n);
        }
    }
    display(totalBalance){
        console.log("AccountHolder Name : "+this.accountHolder);
        console.log("Current Balance : "+this.totalBalance);
    }
    
    
}
// function deposit(n){
//     if(n<0){
//         console.log("Cannot deposite negative ");
        
//     }
//     else{
//         this.totalBalance = this.balance + n
//         console.log(this.totalBalance);
        
//     }
// }
const bank = new BankAccount("Saurabh",1000)
bank.deposit(100)
bank.withdraw(200)
bank.display()

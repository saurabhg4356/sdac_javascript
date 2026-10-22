// Question A

class Book {
    bookID:number
    title:string
    author:string
    isAvailable:boolean
    constructor(bookID:number,title:string,author:string,isAvailable:boolean){
        this.bookID = bookID
        this.title = title
        this.author = author
        this.isAvailable = isAvailable
    }
    display():void{
        console.log(this.bookID);
        console.log(this.title);
        console.log(this.author);
        console.log(this.isAvailable);
    }

    issueABook():void{
        if(this.isAvailable == true){
            console.log("Book is issuued "+this.bookID);
        }
        else{
            console.log("Book will not be issued");
            
        }
        
    }
    returnABook():void{
        if(this.isAvailable == false){
            console.log("Book is return "+this.bookID);
        }
        else{
            console.log("Book is not return");
            
        }
        
        
    }


}
const book = new Book(1,"Book Management","Saurabh",true)

book.display()
book.issueABook()
book.returnABook()

// Question B

class LibraryMember{
    public memberID:number =11
    private borrowedBooks:boolean = true
    protected membershipType:string = "Platinum"

    display():void{
        console.log(this.memberID);
        console.log(this.borrowedBooks);
        console.log(this.membershipType);
        
        
        
    }

}
const library = new LibraryMember()
library.display()
console.log(library.memberID);

class Library extends LibraryMember{
    display(): void {
        console.log("Child Class");
        
        console.log(this.memberID);
        console.log(this.membershipType);
        
        
    }
}
const l = new Library()
l.display()

// Question C

class LibraryItem{
    itemID:number
    title:string
    constructor(itemID:number,title:string){
        this.itemID = itemID
        this.title = title

    }
    display():void{
        console.log("LibraryItem :");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class Book extends LibraryItem{
    
    display(): void {
        console.log("Book :");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class Magazine extends LibraryItem{
    
    display(): void {
        console.log("Magazine :");
        console.log(this.itemID);
        console.log(this.title);
    }
}
const l = new LibraryItem(1,"Librarary")
l.display()
const b = new Book(2,"Book")
b.display()
const m = new Magazine(3,"Magazine")
m.display()

// Question D



type SearchCondition<T> = (item: T) => boolean;

function searchItem<T>(items: T[], condition: SearchCondition<T>): T | undefined {
    return items.find(condition);
}

type BookRecord = {
    title: string;
    author: string;
};

type LibraryMemberRecord = {
    memberID: number;
    name: string;
};

const books: BookRecord[] = [
    { title: "Java", author: "Saurabh" },
    { title: "Python", author: "Sahil" },
];

const members: LibraryMemberRecord[] = [
    { memberID: 101, name: "Saurabh" },
    { memberID: 102, name: "Sahil" },
];

const foundBook = searchItem(books, book => book.title === "Java");
const foundMember = searchItem(members, member => member.memberID === 102);

console.log("Book found:", foundBook);
console.log("Member found:", foundMember);

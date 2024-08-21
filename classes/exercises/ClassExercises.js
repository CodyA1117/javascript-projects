// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckout, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckout = this.timesCheckout;
        this.discarded = discarded;

    }
    checkout(uses=1) {
        this.timesCheckOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);

    }
    dispose(currentYear){
        if (currentYear-this.copyright > 5){
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
}

// Declare the objects for exercises 2 and 3 here:
let pridePrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No' );
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
pridePrejudice.checkout(5);  
pridePrejudice.dispose();    
makingTheShip.dispose(2024); 

console.log(pridePrejudice);
console.log(makingTheShip);

//Finished!!

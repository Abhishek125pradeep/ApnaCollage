class CreateUser{

   constructor(F,M,L,age){
    this.firstname = F;
    this.middlename = M;
    this.lastname = L;
    this.age = age
   }

   getBirthYear(){
     
    return new Date().getFullYear() - this.age

   }

   static sProperty = "Shahrukh";

   static getFullName(firstname,lastname){
    return `${firstname} ${lastname}`
   }

}


let user1 = new CreateUser("Abhishek","Pradeep","Nagrale",26)
console.log(user1);
console.log(CreateUser.sProperty);

console.log(user1.getBirthYear());
console.log(CreateUser.getFullName("Abhishek","Pradeep"));

// ✅ 1. Encapsulation
// Encapsulation refers to bundling data (properties) and methods inside 
// a class to keep them organized.



// //Encapsulation
// class BankAccount{
//     #balance;

//     constructor(accountHolder,initialBalance){
//       this.accountHolder = accountHolder;
//       this.#balance = initialBalance;
//     }


//     deposite(amount){
//         if(amount > 0){
//             this.#balance += amount;
//             console.log(`Deposite ${amount}.New balance ${this.#balance}`);
            
//         }else{
//             console.log("Invalid Deposite Amount");
            
//         }
//     }

//     withdraw(amount) {
//      if(amount > 0 && amount <= this.#balance){
//         this.#balance -= amount;
//         console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
//      }else{
//         console.log("Invalid withdrawal amount or insufficient funds");
//      }
//     }

//     // Public method to check balance
//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount("Alice", 1000);
// account.deposite(500);
// account.withdraw(200);
// console.log(account.getBalance());




// 2. Abstraction
// Abstraction allows hiding implementation details and exposing only the necessary parts.

// The user of the class does not need to know how getBirthYear() calculates the birth year.
// Similarly, static properties (sProperty) and methods (getFullName()) provide functionality without exposing the internal logic.


class Employee{

  constructor(clas,Sec,id){
    this.class = clas,
    this.Sec = Sec,
    this.id = id
  }

}


class Managere extends Employee{


  constructor(){}


}

let person = new Managere(12,"D","Nagrale");
console.log(person);

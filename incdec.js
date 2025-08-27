
// pre increament-opearator
let a = 5;
let b = ++a; 

console.log(a); 
console.log(b); 

// post increment-operator
// let c = 5;
// let d = c++; 

// console.log(c); 
// console.log(d); 

let c = 7;
console.log(c++);
console.log(c);
console.log(c);
let d = c;
console.log(++d);

console.log(d++);
console.log(d);
console.log(d);
console.log(d++);
console.log(d++);
console.log(d++);
console.log(d++);

for(let i = 0; i < 5; ++i){
console.log(i);

}

console.log("Post-Increment Loop:");

for (let i = 0; i < 5; i++) {
    console.log(i);
}


class Person {

    constructor(name,age){
     
        this.name = name,
        this.age = age,
        console.log(this);
        
        

    }

    sayHii(){
        console.log("Hi...");
        
    }

  static  getFullName(){
       console.log("gfhgfhgf");
      return `${this.name} ${this.age}`
   
    
    }
}

let person2 = new Person("Ashu",67);
console.log(person2);
console.log(Person.getFullName());



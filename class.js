

class CreateUser{

    constructor(a,b,c){

        this.firstname = a,
        this.lastname = b,
        this.age = c
        
         console.log("hiiiii");
         console.log(this);
         


    }

   
    


getBirthYear(){
  
    return new Date().getFullYear() - this.age

}


}

const value4 = new CreateUser("Abhishejk","nagrale",45);
const value8 = new CreateUser("nilesh","karale",95);
console.log(value4.getBirthYear == value8.getBirthYear);

console.log(value8);




class User{

    constructor(name){
       
        this.name = name;

        console.log(this);
       
        
    }

}

let user1 = new User("Hardik")

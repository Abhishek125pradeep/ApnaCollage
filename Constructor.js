
// function getBirthYear(){
//     return new Date().getFullYear() - this.age
// }


// function Person(firstname,lastname,age){
  
//     this.firstname = firstname,
//     this.lastname = lastname,
//     this.age = age,

//    getBirthYear()


// }


// let user1 =new Person("Abhishek","Nagrale",90);
// console.log(user1);



// function getBirthYear(){

//   return new Date().getFullYear() - this.age


// }


// function createUser(firstname,lastname,age){


//     let User = {

//         firstname,
//         lastname,
//         age,
//         getBirthYear :function(){
            
//         }

       



//     }

//   return User

// }

// let value1 = createUser("Abhishek","Nagrale",70);
// let value2 = createUser("Nilesh","shambharkar",65);
// console.log(value1);
// console.log(value2);
// console.log(value1.getBirthYear());


// function getBirthYear(){
//   return new Date().getFullYear() - this.age
// }

function CreateUser(firstname,lastname,age){

  this.firstname = firstname;
  this.lastname = lastname,
  this.age = age
 
}

CreateUser.prototype.getBirthYear = function(){
  return new Date().getFullYear() - this.age
}

let User = new CreateUser("Abhishek","nagrale",78)
let User2 = new CreateUser("shailesh","mahajhan",88)
console.log(User);
console.log(User.getBirthYear());

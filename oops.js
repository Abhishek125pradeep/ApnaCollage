// const { use } = require("react");

// const user = {

//     firstName: "Anurag",
//     lastName: "Basu",
//     age: 55,

//     getAgeYear(age) {
//         return new Date().getFullYear() - age;
//     }


// }

// console.log(user.getAgeYear(1990));


// function CreateUser(firstname, lastname, age) {

//     const user = {
//         firstname: firstname,
//         lastname: lastname,
//         age: age

//     }

//     return user

// }

// console.log(CreateUser("Abh","Nag",7));
// console.log(CreateUser("jj","Nag",87));




// let User = {
//   Names: "Abhishek",
//   lastname: "Nagrale",
//   age: 27,

//  getBirthyear : function() {

//     return new Date().getFullYear() - User .age


//   }

// }



function CreateUser(firstname, lastname, age, getBirthYear) {

  User = {

    firstname,
    lastname,
    age,

    getBirthYear: function () {
      return new Date().getFullYear() - User.age;
      console.log(this);

    }

  }

  return User

}

let user1 = CreateUser("abhishek", "Nagrale", 67)
let user2 = CreateUser("sahil", "khan", 77)

console.log(user1);
console.log(user2);


let array = [1, 2, 3];
let array2 = [1, 2, 3]
console.log(array);
console.log(array2);




console.log(this);







console.log(User.getBirthyear);



// let myPromise = new Promise((resolve, reject) => {

//   let success = false;

//   if (success) resolve("promise is resolve");

//   else {
//     return reject("promise is rejected")
//   }


// })

// myPromise.then((res) => {
//   console.log(res);

// })
//   .catch((err) => {
//     console.log(err);

//   })
//   .finally(() => {
//     console.log("Promise execution finished");





function fetchData() {

  return new Promise((resolve, reject) => {
    let boolean = false;
    setTimeout(() => {
      if (boolean) {
        resolve("promise resolve")
      } else {
        reject("reject")
      }

    }, 3000)


  })


}



// async function getData() {

//   try {

//     let result = await fetchData();

//     console.log(result);

//   } catch (err) {
//     console.log(result);

//   }





// }


// getData()



class Dog{

  Sound(){
    console.log("Dog is Barking");
    
  }

}


class Birds extends Dog{

Sound(){
  console.log("Birds is singing");
  
}

}


class Cows extends Birds{

  Sound(){
    console.log("Cow is bitting");
    
  }
}


const Shapes = [new Dog(),new Birds(), new Cows()];
Shapes.forEach(shape => shape.Sound())

// Many forms — the same method behaves differently based on the object calling it.
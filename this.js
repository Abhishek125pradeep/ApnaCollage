

// // const user = {
// //   name: "Abhishek",
// //   outerThis: this,  // evaluated in global scope
// //   show: function () {
// //     console.log("Method this:", this); // 'this' = user
// //     function inner() {
// //       console.log("Inner function this:", this); // global or undefined
// //     }
// //     inner();
// //   }
// // };

// // console.log("Object level this:", user.outerThis);
// // user.show();

// // function getdata(dataId, getNextData) {


// //   return new Promise((resolve, reject) => {

// //     setTimeout(() => {
// //       console.log("dataId", dataId);

// //       resolve("success")
// //       if (getNextData) {
// //         return getNextData();


// //       }
// //     }, 1000)




// //   })



// // }

// // getdata();

// // async function asynchronusfun() {

// //   await getdata(1);
// //   await getdata(2);
// //   await getdata(3);
// //   await getdata(4);
// //   await getdata(5);
// //   await getdata(6);
// //   await getdata(7);
// //   await getdata(8);


// // }

// // asynchronusfun()



// var john = {

//   name1: 'john',
//   age: 65,
//   job: 'teacher',

//   greeting: function (style, timeofday) {


//     switch (style) {
//       case 'formal':
//         console.log("Good " + timeofday + '  ladies and gentleman. My name is ' + this.name1 + '  and i am ' + this.age + ' year old ' + this.job);
//         break;
//       case 'friendly':
//         console.log("Hey there ! my name is " + this.name1 + " and i am " + this.age + ' year old ' + this.job + ' have a nicee ' + timeofday);
//         break


//     }

//   }



// }




// var mark = {
//   name1: "Mark",
//   age: 56,
//   job: "singer"

// }

// john.greeting.call(john, 'formal', "morning")


// john.greeting.apply(mark, ['friendly', 'morning'])


// // var john = {
// //   name1: 'john',
// //   age: 65,
// //   job: 'teacher',

// //   greeting: function (style, timeofday) {
// //     switch (style) {
// //       case 'formal':
// //         console.log(
// //           "Good " +
// //             timeofday +
// //             " ladies and gentlemen. My name is " +
// //             this.name1 +
// //             " and I am " +
// //             this.age +
// //             " years old " +
// //             this.job
// //         );
// //         break;

// //       case 'friendly':
// //         console.log(
// //           "Hey there! My name is " +
// //             this.name1 +
// //             " and I am " +
// //             this.age +
// //             " years old " +
// //             this.job +
// //             ". Have a nice " +
// //             timeofday
// //         );
// //         break;
// //     }
// //   },
// // };

// // // Calling function
// // john.greeting('formal', 'morning');
// // john.greeting('friendly', 'evening');

// function get() {

//   console.log(this)
// }
// get()


// // user = {


// // name1 : setTimeout(function(){
// //     console.log(this);

// //   })


// // }

// // const obj = {
// //   name: "Abhishek",
// //   greet: function() {
// //     console.log("Hello from greet:", this.name);

// //     setTimeout(function() {
// //       console.log("Inside setTimeout:", this.name);
// //     }, 1000);
// //   }
// // };

// // obj.greet();




// // function name1() {


// //   setTimeout(function() {
// //       console.log("Inside setTimeout:", this);
// //     }, 1000);


// // // obj.greet();

// // }
// // name1()



// const joker = () => {

//   console.log(this);


// }




// const car = {
//   brand: "Tesla",
//   show: function () {
//     console.log(this.brand);

//     setTimeout(function () {
//       console.log("Regular:", this.brand);
//     }, 1000);

//     setTimeout(() => {
//       console.log("Arrow:", this.brand);
//     }, 1000);
//   }
// };

// car.show();


// car.show();

// // Here show is a regular method of car.

// // When called as car.show(), this = car.
// // Output:

// // Tesla


// // Inside setTimeout(function () { ... })

// // That callback is a regular anonymous function.

// // In setTimeout, the function is called by the timer, not by car.

// // So this inside it is:

// // Browser (non–strict mode): window

// // Node.js (strict mode): undefined

// // Since window.brand or undefined.brand is not defined →


// // car.show();

// // Here show is a regular method of car.

// // When called as car.show(), this = car.


// // setTimeout(function () { ... })

// // That callback is a regular anonymous function.

// // In setTimeout, the function is called by the timer, not by car.

// // So this inside it is:

// // Browser (non–strict mode): window

// // Node.js (strict mode): undefined


// // show is a regular named function (method) of the object, not anonymous, not standalone.

// // 👉 If you wrote:

// // setTimeout(function () { ... }, 1000);


// // That’s an anonymous regular function.

// // 👉 If you wrote:

// // function show() { ... }



// setTimeout(function () {
//   console.log(this);

// }, 1000)


// setTimeout(function () {
//   console.log(this);
// }, 1000);
// // This function is executed by the timer, not by any object.

// // So its this depends on the environment:

// // Browser (non–strict mode): this = window (global object).

// // Node.js (strict mode by default): this = undefined.




// let User = {
//   names: "abhishek",
//   lastname: "Nagrale",
//   valueofthis: this,

//   show: function () {
//     console.log(this.names);

//     setTimeout(function () {
//       console.log(this.lastname);

//     }, 1000);

//   }

// }
// console.log(User.valueofthis);

// console.log(User.show());




// function joker1(firstname, lastname, age) {

//   users13 = {
//     firstname,
//     lastname,
//     age,
//     namews: function () {
//       console.log(this);

//       return this

//     }

//   }
//   return users13
// }


// let NewUser = joker1("Bruce", "Wayne", 30);

// console.log("NewUser.namews", NewUser.namews());


// // Step 1: What happens in NewUser.namews()

// // NewUser.namews() executes the function:

// // namews: function() {
// //   console.log(this);
// // }


// // Inside this method, this refers to the object that called it (NewUser).

// // So the inner console.log(this) prints:

// // { firstname: "Bruce", lastname: "Wayne", age: 30, namews: f }


// // ⚡ But… the function doesn’t return anything → its return value is undefined.

// // So in the outer log:

// // console.log("NewUser.namews", NewUser.namews());


// // First the inner console.log(this) prints the object ✅

// // Then the outer console.log prints:



// function normalFunc() {
//   console.log(this);

// }
// normalFunc()
// const expression = function () {
//   console.log(this);

// }
// expression()


// const arrow = () => {
//   console.log(this);

// }

// arrow()


// let emp = {

//   names: "Anil",
//   lastname: "khana",

//   getData: function () {
//     console.log(this);


//     setTimeout(function () {
//       console.log(this);

//     },)

//     const narrow = () => {
//       console.log(this);

//     }

//   }


// }
// emp.getData();


// setTimeout(function () {
//   console.log(this);

// },);;


// //how we find this inside arrow function



// let User5 = {

//   firstname: "Abhi",
//   lastname: "nagrale",

//   getvalue: function () {



//     const show = () => {

//       console.log(this);
//       console.log(this.firstname);

//     }

//     setTimeout(function () {
//       console.log(this);
//       console.log(this.firstname);

//     })



//     show()
//   }

// }

// // console.log(User5);
// // console.log(User5.getvalue());



// // function test() {

// //   const parentArrow = ()=>{

// //     const child = ()=>{
// //       console.log(this);

// //     }

// //     child()

// //   }



// //   parentArrow()

// // }

// // test.call({User5})



// function ShowMessage(name) {
//   this.name = name;
//   console.log(...arguments);

// }

// const obj = new ShowMessage("gogole", "jknfkajsd"[1, 2, 3], 6)
// console.log(obj);


// var showCase = 9

// function showCase() {

//   console.log("I will be logged");




// }

// console.log(showCase);




// let num = prompt("Enter a value");
// let value = parseInt(num);

// switch (value) {

//   case 1:
//     document.writeln("Monday");
//     break;

//   case 2:
//     document.writeln("Tuesday");
//     break;

//   case 3:
//     document.writeln("Wed");
//      break;


//   case 4:
//     document.writeln("thurs");
//      break;

//   case 5:
//     document.writeln("friday");
//     break;

//   case 6:
//     document.writeln("saturday");
//     break;

//   default :
//   document.writeln("invalid input")
// }



// function findMinMax(arr) {
//     debugger;
   
//     if(arr.length === 0){
//       return {max : null, min:null}
//     }

//     let max = arr[0];
//     let min = arr[0];

//     for(let i = 1; i < arr.length; i++){
    
//       if(arr[i] < min){
//          min = arr[i]
//       }

//       if(arr[i] > max){

//         max = arr[i]

//       }


//     }

//     return {max,min}
// }

// // Example usage
// const numbers = [5, 2, 9, 1, 7, 3];
// const result = findMinMax(numbers);
// console.log(`Smallest: ${result.min}, Largest: ${result.max}`);


// function fibbonaci(n) {
//  debugger;

//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {

//     fib[i] = fib[i - 1] + fib[i - 2]



//   }

//   return fib.slice(0, n)


// }

// console.log(fibbonaci(10))

// function findMissingNumber(arr){
   
//   debugger;

//    let n = arr.length + 1;
//    let  expectedvalue = 0;
//    let actualvalue = 0;

//    for(let i = 1; i <= n; i++){
       
//       expectedvalue += i;

//    }

//    for(let i = 0; i < arr.length ; i++){
//     actualvalue += arr[i]

//    }

//    return  actualvalue - expectedvalue

// }

// console.log(findMissingNumber([1, 2, 3, 5, 6]))


let arr = []
let user = {}
console.log(Object.__proto__);
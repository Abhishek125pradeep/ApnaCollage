// function mergeArrays(...arrays) {
 
//     let result = [];
    
//     function flatten(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 flatten(arr[i]);
//             } else {
//                 result.push(arr[i]);
//             }
//         }
//     }
    
//     for (let i = 0; i < arrays.length; i++) {
//         flatten(arrays[i]);
//     }
    
//     return result;
// }

// console.log(mergeArrays([1, [2, 3, 4 , [8, 9]], [5, 6]]));


// let arr = [1, 2, 5, 8, 9, 10];
// let missing = [];

// let n = 10; // maximum number

// for (let i = 1; i <= n; i++) {
//   let found = false;
  
//   // check if i exists in arr
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === i) {
//       found = true;
//       break;
//     }
//   }
  
//   if (!found) {
//     missing.push(i);
//   }
// }

// console.log("Missing numbers:", missing);

// function sort(arr) {
//     // Create a copy to avoid modifying the original array
//     let result = [...arr];
    
//     for (let i = 0; i < result.length; i++) {
//         for (let j = 0; j < result.length - i - 1; j++) {
//             if (result[j] > result[j + 1]) {
//                 // Swap elements
//                 let temp = result[j];
//                 result[j] = result[j + 1];
//                 result[j + 1] = temp;
//             }
//         }
//     }
//     return result;
// }

// let arr6 = [300, 900, 400, 6];
// console.log(sort(arr));


// let User = {
//     name: "abhishek",
//     get: function () {
//         setTimeout( ()=> {
//             console.log(this);
//         }, 0);
//     }
// }
// User.get();


//  setTimeout( function() {
//             console.log(this);
//         }, 0);


// function memoize(fun) {
//     debugger
//   let cache = {};  // Step 1: store results

//   return function (...args) {
//     let n = args[0]; // Step 2: assume function has one main argument

//     if (n in cache) {
//       console.log("cache");
//       return cache[n]; // Step 3: return stored result if available
//     } else {
//       console.log("calculating first time");
//       let result = fun(n); // Step 4: call original function
//       cache[n] = result;   // Step 5: store in cache
//       return result;
//     }
//   };
// }

// // Example usage:
// function square(n) {
//   return n * n;
// }

// const memoizedSquare = memoize(square);

// console.log(memoizedSquare(5)); // calculating first time → 25
// console.log(memoizedSquare(5)); // cache → 25
// console.log(memoizedSquare(6)); 





// let Users = {

//   firstname : "Abhishek",
//   Lastname : "Nagrale"

// }


// Users.prototype = function getfullname(){
//     return `${this.firstname} ${this.Lastname}`
//   }.call(Users)


//   console.log(Users);
  
//   console.log(Users.prototype);


// calculating first time → 36





// const Obj = {
  
//   a : 1,
//   c : ()=>{

//   return this.a

//   }


// }

// console.log(obj.c.call({a:1}));

// undefined


// function Human(fname,lname){
    
//     this.firstname = fname,
//     this.lastname = lname
    
// }

// const MrX = new Human("Mr.", "x");

// const rock = Human("the ", "ROck");
// console.log(MrX);
// console.log(rock)


// Human { firstname: 'Mr.', lastname: 'x' }
// undefined

//how to find first non repeating char
// function firstNonRepeatingChar(str) {
//     const charCount = {};
    
//     // First pass: count occurrences
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
    
//     // Second pass: find first character with count 1
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }
    
//     return null; // or return '' if no non-repeating character found
// }

// const str = "sampledbss";
// console.log(firstNonRepeatingChar(str)); // "a";




// function  getPrice(ProductName){


//   if(ProductName === "pizza"){
//        return 350;
//   }else if(ProductName === "burger"){
//     return 100;

//   }else if(ProductName === "sandwitch"){
//    return 80
//   }


// }// complicated code


// const price = {

//   pizza : 350,
//   burger : 230,
//   salad : 100,
//   bread : 50

// }

// function getPrice(ProductName){

//   return price[ProductName] || 0

// }

// const ket = ["a", "b", "c"];





// function Getbirth(firstname,lastname,age){

//     this.firstname = firstname,
//     this.lastname = lastname,
//     this.age = age
    

    


// }


//  Getbirth.prototype.fullbirthyear = function (){

//     return new Date().getFullYear() - this.age;


// }

// let value = new Getbirth("Abhishek","Nagrale",78);
// let value2 = new Getbirth("Abhishek","Nagrale",99);
// console.log(value);





// let a = ["value1", "value2"];
// let b = a;
// b.pop();
// console.log(a);
// console.log(b);




function nestedandsortoutarr(arr1, arr2){
    
    
    let result = [];
    
    for(let i = 0; i < arr1.length; i++){
        
        result[result.length] = arr1[i]
        
        
    }
    
    
    for(let i = 0; i < arr2.length; i++){
        
        result[result.length] = arr2[i]
        
    }
    
    
    for(let i = 0; i < result.length; i++){
        
        for(let j =0; j < result.length-1; j++){
            
            if(result[j] > result[j + 1]){
                
                const temp = result[j];
                result[j] = result[j + 1]
                
                result[j + 1] = temp
                
            }
            
            
        }
        
        
        
    }
    
    
    
    return result
    
    
    
}
const array1 = [3, 1, 4];
 const array2 = [2, 5, 6];

console.log(nestedandsortoutarr(array1,array2))
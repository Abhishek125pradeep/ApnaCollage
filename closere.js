// // let name = "akshay"
// // function init() {

// //     var name = "Babar";

// //     function displayName() {

// //         let name = "ABhishek"
// //         console.log(name);


// //     }

// //     displayName()
// // }
// // init()


// // function scopeTest() {
// //      var varVariable = "I'm ";
// //   if (true) {
// //     var varVariable = "I'm var";
// //     let letVariable = "I'm let";
// //     const constVariable = "I'm const";
// //   }
  
// //   console.log(varVariable); // What will this output?
// //   console.log(letVariable); // What will this output?
// //   console.log(constVariable); // What will this output?
// // }
// // scopeTest();

// // console.log(a); // What will this output?
// // console.log(b); // What will this output?
// // console.log(c); // What will this output?

// // var a = "var variable";
// // let b = "let variable";
// // const c = "const variable";


// // var name1 = "Alice";
// // let age = 25;
// // const birthYear = 1995;

// // name1 = "Bob"; // Will this work?
// // age = 26;     // Will this work?
// // birthYear = 1996; // Will this work?

// // console.log(name1);



// for (var i = 0; i <= 3; i++) {
//     debugger
//   setTimeout(() => console.log(i), 1000);
// }

// for (let j = 0; j <= 3; j++) {
//   setTimeout(() => console.log(j), 2000);
// }


// // for(let i = 500; i < 50; i--){
// //     console.log(i);
    
// // }

// // for(let i = 50; i <= 500; i--) {
// //     console.log(i);
// // }

// for (let i = 50; i <= 500; i += 50) {
//     console.log(i);
// }


// for (let i = 1; i <= 256; i *= 2) {
//   console.log(i);
// }


// for (let i = 0; i <= 50; i += 2) {
//   console.log(i);
// }


// for (let i = 1000; i >= 0; i -= 100) {
//   console.log(i);
// }

// for (let i = 25; i <= 200; i += 25) {
//   console.log(i);
// }

// for (let i = 100; i >= 10; i -= 15) {
//   if (i <= 40) break; 
//   console.log(i);
// }


 const arr = [1, [2, [3,4],5],6];
// console.log(arr.flat(Infinity));



function flattenArray(arr) {
 
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the element is an array, recursively flatten it
      result = result.concat(flattenArray(arr[i]));
    } else {
      // If the element is not an array, add it directly
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(flattenArray(arr));


const nums = [1, 2];
const letters = ['a', 'b'];
const booleans = [true, false];

// const combined = nums.concat(letters, booleans);


// const arr1 = [1, [2, 3]];
// const arr2 = [4, [5, 6]];

// const combined = arr1.concat(arr2);
// [1, [2, 3], 4, [5, 6]] (note: doesn't flatten nested arrays);

const colors = ['red','green','blue'];
const [first, ...second] = colors;
console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second);

const [hgvhg, , third] = colors;
console.log(first);  // 'red'
console.log(third);  // 'blue'
const [a = 1, b = 2] = ['only one'];
console.log(a); // 'only one'
console.log(b); // 2 (default)

// const [first, ...rest] = colors;
console.log(first); // 'red'
 // ['green', 'blue']


const person = { name: 'John', age: '30' };

// Old way:
// const name = person.name;
// const age = person.age;

// With destructuring:
const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30;


const { name: personName, age: personAge } = person;
console.log(personName); // 'John'
console.log(personAge);  // 30


// const { name, age, country = 'USA' } = person;
// console.log(country); // 'USA' (default)


const user = {
  id: 1,
  name: 'Alice',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const { address: { city, zip } } = user;
console.log(city); // 'New York'
console.log(zip);  // 10001


function factorial(n){
  

    if(n <= 1) return 1;

    return n * factorial(n-1)



}
console.log(factorial(5));




function removeDuplicate(str){
   
   var result = "";
   var seen= {};
  
   for(let i = 0 ; i < str.length; i++){
       
        var char = str[i];
     
          if(!seen[char]){
            
            result +=  char;
            seen[char] = true;
       
         }
     
   }
  
    return result;
  
}

console.log( removeDuplicate("mississipi"))

function findSecondHighest(arr) {
  // Assume the array has at least two distinct elements
  var max = arr[0];
  var secondMax = arr[0];

  // First pass: find the maximum value
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Second pass: find the highest value less than max
  var found = false;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] !== max) {
      if (!found || arr[j] > secondMax) {
        secondMax = arr[j];
        found = true;
      }
    }
  }

  if (!found) {
    return "No second highest (all values are same)";
  }

  return secondMax;
}

// Example usage
var numbers = [4, 1, 9, 7, 9, 3];
console.log(findSecondHighest(numbers)); // Output: 7



function findSecondHighest(arr) {
  var max = -Infinity;
  var secondMax = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  if (secondMax === -Infinity) {
    return "No second highest found";
  }

  return secondMax;
}

// Example usage
var numbers = [3, 8, 1, 10, 5, 10];
var result = findSecondHighest(numbers);
console.log(result); // Output: 8



function Findlargest(arr){
    debugger;
    if(arr.length < 2){
        
        return "array is need to contain must be 2 itoms"
        
    }
    
    let largest = arr[0];
    let secondLargest = null;
    
    for(let i = 0; i < arr.length; i++){
          
          let current = arr[i];
          
          if(current > largest){
              
               secondLargest = largest;
               largest = current;
              
          }else if(current < largest){
              
              if(secondLargest === null || current >  secondLargest ){
                  
                  secondLargest = current
              }
              
          }
         
        
    }
    
    
  return secondLargest;
}

console.log(Findseconlargest([21, 23, 7, 50, 87, 3, 27]));



function Findsecondlargest(arr){
    
    if(arr.length < 2){
        return "arr"
    }
    
    let largest = arr[0];
    let secondlargest = null;
    
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        
        if(current > largest){
            secondlargest = largest;
            largest = current;
        }else if(current > largest){
            if(secondlargest === null || largest > secondlargest){
                
                secondlargest = current;
            }
        }
    } if(secondlargest === null){
        return "djfisja"
    }
    return secondlargest
}

console.log(Findsecondlargest([12, 11, 32, 4]))










let arr = [33, 12, 54, 6, 89, 98, 45];

let largest = arr[0];
let lowest = arr[0];


for (let i = 0; i < arr.length; i++) {

  if (arr[i] > largest) {
    largest = arr[i]
  }

  if (arr[i] < lowest) {

    lowest = arr[i]

  }

}
console.log(lowest)
console.log(largest)



function Findsecondlargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let largest, secondLargest;

  // Initialize with first two elements
  if (arr[0] > arr[1]) {
    largest = arr[0];
    secondLargest = arr[1];
  } else {
    largest = arr[1];
    secondLargest = arr[0];
  }

  // Loop through rest of array
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example




console.log("Second Largest:", Findsecondlargest(arr));

function findFactorial(n) {
  if (n === 1 || n === 0) return 1; // base case

  return n * findFactorial(n - 1);  // recursive call
}

console.log(findFactorial(5)); // 120;




function findfibonacciseries(n) {

  fib = [0, 1];

  for (let i = 2; i < n; i++) {

    fib[i] = fib[i - 1] + fib[i - 2];



  }
  return fib.slice(0, n)
}

console.log(findfibonacciseries(10));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// print series
let n = 10;
let series = [];
for (let i = 0; i < n; i++) {
  series.push(fibonacci(i));
}
console.log(series);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



function findLongestWord(str) {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== " ") {
      // build current word
      currentWord += ch;
    } else {
      // check if current word is longer
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = ""; // reset
    }
  }

  // check last word after loop ends
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }

  return longestWord;
}

let sentence = "i want to learn javascritpt from begining";
console.log(findLongestWord(sentence)); // javascritpt

function findLargestWord(str) {
  return str.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  , "");
}

console.log(findLargestWord("i want to lear javaqascript")); // javaqascript



function removeDuplicates(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // check if char is already in result
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === char) {
        found = true;
        break;
      }
    }

    if (!found) {
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("mississipi")); // "misp"


function powerSet(arr) {
  let result = [];
  let n = arr.length;
  let total = 1 << n; // 2^n

  for (let mask = 0; mask < total; mask++) {
    let subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(arr[i]);
      }
    }
    result.push(subset);
  }

  return result;
}

console.log(powerSet([1, 2, 3]));



let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(`Element at [${i}][${j}] = ${arr[i][j]}`);
  }
}




async function valueable() {

  return "hellow word"

}

valueable()


function sum(a, b, c, ...d) {
  return a + b + c + d;
}
const args = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(...args));
console.log(sum(...args));
console.log(...args);


console.log(1 + [1, 2, 3, 4]);



class Person {

  constructor(names) {
    this.names = names
  }

  fn() {
    console.log(this.names);

  }

}

const person = new Person("Mr.x");
console.log(person);
console.log(person.fn());


function magic() {

  return x = 1, [], {}

}

magic()

const YT = "Frontendmaster";
const IG = "Alhabadi.dev";

const result = !!(YT && IG);
console.log(result);


// var magic = 1;
// function magic(){

//   return console.log("5");


// }
// magic();
// it will shows the error
//DSA.js:261 Uncaught TypeError: magic is not a function


var y = 1;

if (function f() { }) {
  y += typeof f;
}
console.log(y);

if ([]) {
  console.log("true");

}

if ([] == true) {

  console.log("true");

} else {
  console.log("false");

}

let ab = { red: 'names' };
const { red, red: a, red: c } = ab;
console.log(red, a, c);


function parent() {

  let lang = "js";
  let lib = "react";
  child()

  function child() {

    console.log(lang);
    console.log(lib);

    sibling()




  }

  function sibling() {

    console.log("what about me");



  }

  console.dir(child);
  console.dir(sibling);



}
parent();


console.log(NaN.toString() == NaN.toString());

console.log(NaN.toString() === NaN.toString());

const one = "8798";
const obj = {
  ['one']: "anil",
  [one]: "manthan"
}

console.log(obj.one);

const [ah] = [2, 3, 4, 5];
console.log(ah);


function findVowels(sentence) {
  let vowels = "aeiouAEIOU";  // all vowels
  let found = [];
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // check if the character is a vowel
    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        found.push(char);
        count++;
      }
    }
  }

  console.log("Vowels found:", found);
  console.log("Total vowels:", count);
}

findVowels("JavaScript is amazing");


const objct = [
  { key: 'Sample 1', data: 'Data1' },
  { key: 'Sample 1', data: 'Data1' },
  { key: 'Sample 2', data: 'Data2' },
  { key: 'Sample 1', data: 'Data1' },
  { key: 'Sample 3', data: 'Data1' },
  { key: 'Sample 4', data: 'Data1' },
];
const output = {};

objct.forEach(item => {
  if (output[item.key]) {
    // if key already exists, push item into its array
    output[item.key].push(item);
  } else {
    // if key doesn’t exist, create array with first item
    output[item.key] = [item];
  }
});

console.log(output);

const arr7 = [1, 2, 3, 4, 5]

console.log(1 in arr);
console.log(2 in arr);
console.log(3 in arr);
console.log(4 in arr);
console.log(5 in arr);


// in operator is use with alway object if tha element existing or not
//it will return a  boolen format;


function args3(num1, num2) {



  return arguments[0] + arguments[1]


}
console.log(args3(10, 20));



function args3(num1, num2) {
  "use strict"
  num1 = 50,
    num2 = 30;

  return arguments[0] + arguments[1]


}
console.log(args3(10, 20));

console.log([] == "");
//true


function duplicateitom(arr){
    debugger
    let result = [];
    let n = arr.length
    
    for(let i = 0; i < arr.length; i++){
        
        for(let j = i+1; j < n; j++){
            
            if(arr[i] == arr[j]){
                result.push(arr[i])
                
            }
            
        }
         
    }
    
    return result
    
}

let listarray = [1, 2, 3, 4, 5, 6, 7, 2, 5];
console.log(duplicateitom(listarray))



let an = [];
let b = an;
console.log(an == b); // true (same reference)
console.log([1,2] == [1,2]); // false (different objects)


console.log([] == {});   // false;

// console.log([] === {});


// console.log([] == 0); true
// console.log([] === 0);false

// == does type coercion.

// [] (empty array) gets converted:

// First → [].toString() → ""

// Then → Number("") → 0;

// 0 == 0


// console.log([] === 0);

// === checks type + value without coercion.

// [] is an object, 0 is a number → types differ.

// ✅ Result: false


console.log(null == undefined);
console.log(null === undefined);
// == allows type coercion with special rules.

// By definition in the ECMAScript spec, null is only loosely equal to undefined (and itself).


// Left side is '' (empty string).

// Rule: when comparing string with number, JavaScript converts the string to a number.

console.log('' == 0);
console.log('' === 0);


console.log(true + true);
console.log(true == 2);


console.log(NaN == NaN);false
console.log(Object.is(NaN, NaN));

console.log({} + []);

console.log([] + {});



console.log("1" + +1);

let num = "5";
console.log(-num);//-5
console.log(+"0xFF"); 


console.log(1 + + "2" + 3);

console.log(+"5");    // Output: 5 (number)
console.log(+"Hello"); // Output: NaN
console.log(+true);   // Output: 1

console.log(-"5");    // Output: -5
console.log(-true);   // Output: -1

// Logical NOT (!): Converts the operand to a boolean (if necessary) and then negates it. Returns true or false


const apiPromise = new Promise((resolve, reject) => {

  const apiResponse = {

    name: "akhil",
    designation: "frontend developer"

  }


  const statusCode = 200;

  if (statusCode == 200) {

    resolve(apiResponse)

  } else {
    reject("some went wrong")
  }


});

apiPromise.then((res)=>{
  console.log(res);
  
});

function changeposition(str1, str2) {
  let result = "";
  let maxLen = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < str1.length) {
      result += str1[i]; // take from first string
    }
    if (i < str2.length) {
      result += str2[i]; // take from second string
    }
  }

  return result;
}

console.log(changeposition("harerama", "harekrishana"));


function sort(arr) {
    // Create a copy to avoid modifying the original array
    let result = [...arr];
    
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Swap elements
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

let arr6 = [300, 900, 400, 6];
console.log(sort(arr)); // Output: [6, 300, 400, 900]



function nestedarr(a,b,c,...d){
    
  return a + b+ c+ d
  //it will add first a +b +c then it will concat
  // output 64,5,6,7,8
    
}

console.log(nestedarr(1,2,3,4,5,6,7,8));

function nestedarr(a, b, c, ...d) {
    return a + b + c + d.reduce((sum, num) => sum + num, 0);
}

console.log(nestedarr(1, 2, 3, 4, 5, 6, 7, 8)); // Output: 36

//by using spread operators
function sumAll(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100


// concat array
function mergeArrays(...arrays) {
    let result = [];
    
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result.push(arrays[i][j]);
        }
    }
    
    return result;
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]


function mergeArrays(...arrays) {
    let result = [];
    
    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }
    
    return result;
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6];


function calculateAverage(...scores) {
    let sum = 0;
    
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    
    return sum / scores.length;
}

console.log(calculateAverage(85, 90, 78, 92)); // 86.25
console.log(calculateAverage(100, 100, 100)); // 100


//The spread operator expands or spreads out elements of an iterable (like arrays, strings, objects).


const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a copy
console.log(arr2); // [1, 2, 3]


const arr21 = [1, 2];
const arr23 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4];

const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o'];

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const mergedw3= {...obj1, ...obj2};
console.log(merged); // {a: 1, b: 2, c: 3, d: 4};


// destructuring spread opearators


const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const [firstColor, , thirdColor, ...otherColors] = colors;

console.log(firstColor);    // 'red'
console.log(thirdColor);    // 'blue'
console.log(otherColors);   // ['yellow', 'purple']

const numbers = [1, 2, 3, 4, 5];

// Extract first two, spread the rest
const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@email.com',
    country: 'USA',
    profession: 'Developer'
};

const {name, age, ...otherInfo} = user;

console.log(name);      // 'Alice'
console.log(age);       // 25
console.log(otherInfo); // {email: 'alice@email.com', country: 'USA', profession: 'Developer'}.

//nesting destructing array

const matrix = [[1, 2], [3, 4], [5, 6]];

// Destructure nested arrays
// const [[a, b], [c, d], [e, f]] = matrix;

// console.log(a, b); // 1, 2
// console.log(c, d); // 3, 4
// console.log(e, f); // 5, 6

const deepArray = [1, [2, [3, [4, 5]]], 6];

// const [first, [second, [third, [fourth, fifth]]], sixth] = deepArray;

console.log(first);  // 1
console.log(second); // 2
// console.log(third);  // 3
// console.log(fourth); // 4
// console.log(fifth);  // 5
// console.log(sixth);  // 6

// const user = {
//     name: 'John',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         coordinates: {
//             lat: 40.7128,
//             lng: -74.0060
//         }
//     }
// };

// const { name, address: { street, city, coordinates: { lat, lng } } } = user;

// console.log(name);    // 'John'
// console.log(street);  // '123 Main St'
// console.log(city);    // 'New York'
// console.log(lat);     // 40.7128
// console.log(lng);     // -74.0060;



console.log(false == ![]);


// ![] → What happens?
// [] is an empty array (truthy value)

// ! (NOT operator) converts truthy to false, falsy to true

// Since [] is truthy, ![] becomes false

// So: ![] = false

console.log(false == []);


// According to JavaScript's abstract equality comparison algorithm:

// If one operand is boolean, convert it to a number first

// So false becomes 0

// Now we have: 0 == []

// When comparing a number with an object (array is an object), the object gets converted to a primitive

// Empty array [] converts to empty string ""

// Now we have: 0 == "";



// let str = "sare jaha se acha";

// let result = str.split(" ")
// .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// .join(" ");

// console.log(result)

// let str = "sare jaha se acha";

// let reversed = str.split(" ").reverse().join(" ");

// console.log(reversed); // acha se jaha sare


// console.log([] == true);
// [].toString():
// Empty array → empty string "".
// "" == 1
// "" → 0.


// console.log(![])
// VM95:1 false

// console.log(!{})
// VM108:1 false


// var a = [10, 11, 12, 13, 14];

// function print(b,...a){
//     console.log(a)
    
    
// }output [ 2, 3, 4 ]
//  print(1, 2, 3, 4)




function sortnumberstr(str){
    
    let number = [];
    let string = [];
    
    for(let i = 0; i < str.length; i++){
        
        if(typeof(str[i]) == 'number'){
            number.push(str[i])
            
        }else{
            string.push(str[i])
        }
        
    }
    return {number,string}
}

console.log(sortnumberstr([1,2,3,"happy","birth","dat"]));

// Q} can javascript object conver json:

const obj33 = {
  name: "Abhishek",
  age: 25,
  city: "Nagpur"
};

// Convert object to JSON string
const jsonstring = JSON.stringify(obj33)
// Output: {"name":"Abhishek","age":25,"city":"Nagpur"}



function abc(x =0,y,z){

}
console.log(abc(1));



function xyz(a, b=4,c,d,e){

}

function pqr(a, b,c=8){

}



console.log(abc.length); //3
console.log(xyz.length);//3
console.log(pqr.length);//0

// In JavaScript, arguments are assigned to parameters by position (index).


let names = "jatin";
names[1] = "bisht";
console.log(names);

// Strings in JavaScript are immutable (cannot be changed in place).

// When you try names[1] = "bisht", JS doesn’t throw an error, but it silently ignores the assignment.

// Why? Because "jatin"[1] refers to "a" (character at index 1), and you cannot replace a single character of a string by assignment.

// So the original string "jatin" stays the same.


// each word on next line
// let str = "my name is jatin bisht";

// let result = str
//   .split(" ")
//   .map(itom => itom.charAt(0).toUpperCase() + itom.slice(1))
//   .join("\n");

// console.log(result);


// let arr = ["chandan", "and"];

// let first = arr[0];
// let second = arr[1];

// let isTrue = false;

// for (let i = 0; i < second.length; i++) {
//   let char = second[i];
//   let found = false;

//   // check manually if char exists in first string
//   for (let j = 0; j < first.length; j++) {
//     if (char === first[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     isTrue = true;  // char not found
//     break;
//   }
// }

// console.log(isTrue);


// let result =(function fibonaci(n){
    
//     let fib = [2,3];
//     for(let i = 2; i < n; i++){
        
//         fib[i] = fib[i -1] + fib[i - 2]
        
//     }
    
//     return fib.slice(0,n)
    
// })(10)
// console.log(result);

// The ?? (nullish coalescing) operator returns the right-hand value only if the left-hand value is null or undefined.
console.log(0 || null);
console.log(0 ?? undefined);
console.log("" ?? "");
console.log([] ?? "Hellow");
console.log({} ?? "Hellow");
console.log(false ==  []);



// Logical OR (||)

// Returns the first truthy value.

// If both sides are falsy, it has no choice but to return the last value.

console.log(0 || null);   // null (both falsy → last one returned)
console.log("" || false); // false (both falsy → last one returned)


// 2. Logical AND (&&)

// Returns the first falsy value.

// If both sides are truthy, it returns the last one.

console.log(0 && null);   // 0 (first falsy → returned immediately)
console.log(1 && "hi");   // "hi" (both truthy → last one returned)



function infinitecurrying(x){

    return function inner(y){

      if(y === undefined){
           
        return x;
      }

     return infinitecurrying(x + y)
    }
    

}

console.log(infinitecurrying(1)(2)(3)(4)(5)(6)(7)(8)());


// try{

// console.log(marks);
// //DSA.js:1040 Uncaught ReferenceError: marks is not defined
// marks = "hellow word"

// }
// catch(err){
// console.log(err.message);

// }



// console.log(marks);



// function one(a = 5, b = 7) {
//   console.log(a + b);
// }

// one(undefined, 20);


// In JavaScript, default parameters are used only if the argument is undefined.

// Here:

// a = undefined → default a = 5 is used.

// b = 20 → overrides default b = 7.

// ✅ Calculation: 5 + 20 = 25


// function two(a = 5, b = 7) {
//   console.log(a + b);
// }

// two(null, 20);


// Default parameters are not used for null, only for undefined.

// Here:

// a = null → default a = 5 is ignored.

// b = 20 → overrides default b = 7.

// ✅ Calculation: null + 20 → In JavaScript, null is coerced to 0 when used with +.

// So result is 0 + 20 = 20.


console.log(100 + undefined);
// 100 + NaN = output NaN

// The + operator in JavaScript does type coercion.

// 100 is a number, undefined is… well, undefined.

// When you try to add a number + undefined, JavaScript cannot convert undefined into a number meaningfully.



console.log(100 + null);

// 100 is a number.

// null in arithmetic is converted to 0.

// So 100 + null → 100 + 0 → 100.



// var sum = 100 +  score;
// 100 + NaN
// var score = 500;
// console.log(sum);




let count = 0;
let nums = [0, 1, 2, 3, 4];

nums.forEach(num => {
    count = count + 1;
});
console.log(count);

const objjhj = {
    a: 1,
    c: 3,
    "a": 6,
    b: 7
};

console.log(objjhj);
// Object keys must be unique.

// If a key is repeated, the last value wins.

// Here:

// a: 1 is overwritten by "a": 6.

// Data types of the keys:
// In your object objjhj:

// a: string (all object keys in JavaScript are strings or Symbols)

// c: string

// "a": string (but this duplicates the first a key)

// b: string




// const data = {
//     nase : "nabil"
// }

// const abc = [1, 2, 3, 4];

// console.log(delete data)
// console.log(data)
// console.log(delete abc)
// console.log(abc)


// The delete operator is used to delete properties from objects, but it cannot delete variables declared with:

// const

// let

// var (in global scope)

// Function parameters

// Since data and abc are variables (not properties), delete returns false and the variables remain unchanged.


// What delete can actually delete:

// const obj = { name: "John", age: 30 };
// console.log(delete obj.name);  // true
// console.log(obj); 



let outer = {
  count: 0,
  inc: function () {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
outer.inc();


// outer object is created

// It has a property count = 0

// And a method inc.

// Call outer.inc()

// Inside inc, setTimeout is scheduled to run after 1000 ms (1 second).

// Arrow function in setTimeout

// Arrow functions don’t have their own this.

// They use this from the surrounding scope (inc method).

// In this case, this inside inc refers to outer.

// After 1 second

// The arrow function runs.

// this.count++ → outer.count = 0 + 1 = 1.

// console.log(this.count) → prints 1.



// let outer = {
//   count: 0,
//   inc: function () {
//     setTimeout(function () {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   }
// }
// outer.inc();


// Step by Step

// outer object created with count = 0.

// outer.inc() is called → schedules a setTimeout.

// After 1000 ms, the callback runs:

// function() {
//   this.count++;
//   console.log(this.count);
// }


// Here, this is not outer anymore.

// In JavaScript, a normal function’s this depends on how the function is called.

// setTimeout calls the function without a context → so this defaults to:

// window (in browsers, non-strict mode)

// undefined (in strict mode, or in modules like ES6 by default)

// So:

// If non-strict mode in browser → this === window.

// window.count is undefined initially.

// this.count++ → undefined + 1 = NaN.

// Output: NaN.

// If strict mode / ES6 module → this === undefined.

// this.count++ → Error: Cannot read properties of undefined.

// ✅ Possible Outputs

// NaN (most common in browser non-strict mode).;



var num1;
num1 = 10;

function print() {
    var num1;
    if (num1 > 20) {
        num1 = 50;
    }
    console.log(num1);
}

print();
// if (num1 > 20) {
//     num1 = 50;
// }
// Here, local num1 is undefined.

// undefined > 20 → false.


// var a = 10;
// console.log(a);// 10

// function fn() {
//     console.log(a);//undefined
//     var a = 20;
//     a++;
//     console.log(a);//21
//     if (a) {
//         var a = 30;
//         a++;
//         console.log(a);//31
//     }
//     console.log(a);//31
// }

// fn();
// console.log(a);//10


// for (var i = 0; i < 3; i++) {
//   (function () {
//     console.log(i)
//   })()
// }

// for (var i = 0; i < 3; i++) {
//   (function () {
//     setTimeout(() => {
//       console.log(i)
//     })
//   })()
// }


// let count = 2;

// const obj = {
    
//     count : 4,
    
//     increament : ()=>{
         
//          this.count++
//         console.log(this.count)
//     },
    
//     decrement: function(){
//         this.count--
//         console.log(this.count)
//     }
// }


// obj.increament();//NaN
// obj.decrement();//3

console.log(bar)//function body
function bar() {
  console.log("helllw word")
}

var bar = "fgdgfd";
console.log(bar)//fgdgfd


function foo() {
    function employeeId() {
        console.log(typeof employeeId);
    }
    employeeId();  // call the function
    return;
}

console.log(typeof employeeId);

//function


function abc(){
    
    let a= b=3;
    return a
}
abc()
console.log(b)
console.log(a);
//because b is global variable it b will gave 3 and a is referance erro

function print() {
    setTimeout(function () {
        console.log(name);
    }, 0);
    var name = "Demo";
}

print();


//Demo

console.log("jatin" > 9); 
console.log("jatin" < 9);


// Step 1: What happens when we compare string with number in JS?

// In JavaScript, when you use < or >, it tries to convert both values to numbers (if possible).

// "jatin" is a string that cannot be converted to a valid number.

// Number("jatin") → NaN.

// So both comparisons actually become:

// console.log(NaN > 9);  // false
// console.log(NaN < 9);  // false;



function mergeArrays(...arrays) {
    let result = [];
    
    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }
    
    for (let i = 0; i < arrays.length; i++) {
        flatten(arrays[i]);
    }
    
    return result;
}

console.log(mergeArrays([1, [2, 3, 4 , [8, 9]], [5, 6]]));


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


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

// console.log(Math.floor(-3.3));
// console.log(Infinity - Infinity);
// console.log(Number("false"));
// console.log(Number("djsfkl"));

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

function changeposition(str1, str2){
    let result = "";
    
    // Convert to arrays if strings are passed
    const arr1 = Array.isArray(str1) ? str1[0] : str1;
    const arr2 = Array.isArray(str2) ? str2[0] : str2;
    
    let Maxlen = Math.max(arr1.length, arr2.length);
    
    for(let i = 0; i < Maxlen; i++){
        if(i < arr1.length){
            result += arr1[i];
        }
        if(i < arr2.length){
            result += arr2[i];
        }
    }
    
    return result;
}

console.log(changeposition("hare rama ", "hare krishna"));
// Output: "hhaarree  rrakmmaa "

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
// console.log(obj); //age:30 becaue name:john is deleted



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




function scope(){


{
  var x = 9;
  var y = 7;

}
console.log(x,y);


} //convert this cod like your not able to access value of variale i outside of that block;



//ans=>

  
function scope(){


{
  (function(){
      var x = 9;
   var y = 7;

  })()


}
console.log(x,y);


}


let nuum = 5;
console.log(nuum + 1);//6
console.log(++nuum);//6
console.log(nuum++);//6



var x = 10;


function set(){
  
  var x;
  if(x > 20){
      
      
      var x = 40;
      
  }  
  
  
  console.log(x)
    
}

set()// this is undefined


var x = 10;


function set(){
  

  if(x > 20){
      
      
      var x = 40;
      
  }  
  
  
  console.log(x)
    
}

set()// also undefied



// const namesdf = "Saikrishna";

// age = 90;
// console.log(delete namesdf);
// age = 90;
// console.log(delete age);



// const strkjj = "abc" + + "def";

// console.log(strkjj);abcnan


//how to reeduce the length
let data = [4, 7, 2, ,6, 8, 12, 9, 7, 90]

data.length = 3;
console.log(data)//


//comma operators let x = 10;
// let x = 10
// x = (x++, x);
// console.log(x);
// 🧩 Step 1: let x = 10;

// ✅ x is initialized with value 10.

// 🧩 Step 2: The expression (x++, x)

// This is called the comma operator in JavaScript.

// 👉 The comma operator ( , ) evaluates both expressions, 
// but returns the value of the last one.
// (x++, x)


// tep 3: Assignment

// x = (x++, x)
// → x = 11

// So after the assignment, x becomes 11.

// tep 3: Assignment

// x = (x++, x)
// → x = 11

// So after the assignment, x becomes 11.

// let b = 3;
// b = (b + 2, b * 2, ++b);
// console.log(b);
// Step-by-step:

b = 3

// Expression (b + 2, b * 2, ++b)
// The comma operator runs expressions from left to right, but returns only the last one.

// Let's evaluate each:

// b + 2 → 3 + 2 = 5 (just evaluated, not stored)

// b * 2 → 3 * 2 = 6 (still not stored)

// ++b → pre-increment → increases b from 3 → 4, then returns 4

// The whole (b + 2, b * 2, ++b) gives 4.

// So now:
// b = 4

// ✅ Output:4


// let c = 10;
// c = (c++, c += 2, c--, c);
// console.log(c);// 12;

// when we try to filter data byusing map it will  return boolean

// let result =  [1, 2, 3, 4,5 , 6].filter((itom)=>   itom > 5);

// console.log(result)

//console.log("shiv" - "12");
// Console.log("shiv" -12)
// ChatGPT said:

// Let's analyze 👇

// console.log("shiv" - 12);

// Step 1️⃣: What happens here

// The - (minus) operator only works with numbers.

// So JavaScript tries to convert both operands to numbers before subtraction.

// Step 2️⃣: Conversion

// "shiv" → cannot be converted to a number → becomes NaN (Not a Number).

// 12 → stays as 12.

// Step 3️⃣: Operation
// NaN - 12  // → NaN

// ✅ Final Output:
// NaN

// 💡Explanation:

// Whenever you use arithmetic operators (+, -, *, /) with non-numeric strings, JavaScript attempts to convert them to numbers.
// If it fails, the result becomes NaN.

// You said:
// console.log("shiv" - "12");

// ChatGPT said:

// Let's break it down 👇

// console.log("shiv" - "12");

// Step 1️⃣: Operator

// The - (minus) operator works only with numbers, so JavaScript tries to convert both operands into numbers.

// Step 2️⃣: Type conversion

// "shiv" → cannot be converted → becomes NaN

// "12" → can be converted → becomes 12

// Step 3️⃣: Perform subtraction
// NaN - 12 → NaN

// ✅ Final Output:
// NaN


console.log(100 + "6" + 20);//100620
console.log("100" + 6 + 20);//100620
console.log(100 + 6 + "20")//10620

console.log(100 - "8" - 20)//72
console.log(100 - "h" - 20)//Nan

// let abc = 100;
// if(function xyz(){}){
//     abc = abc - typeof(xyz)
// }
console.log(abc)//Nan

function abc(){}

console.log(typeof abc)//function




// const calculate = (a, b, operation)=>{
    
//     return operation(a,b)
    
// }

// const result =calculate(3, 4,function(num1,num2){
//     return num1 + num2
// })

// console.log(result)

// const substraction = (a,b)=> a - b;
// let sub = calculate(5, 4,substraction)




function differ(arr){
    
    let num = [];
    let str = [];
    let char = []
     
    for(let i = 0; i < arr.length; i++){
        let number = arr[i]
        if(typeof number === 'number'){
            num.push(number)
            
        }
        if(typeof number === 'string'){
            if(number.length == 1){
                char.push(number)
            }else{
                 str.push(number)
                
            }
        }
        
    }
    
    return {num,str,char}
    
}

let arrays = [1, 2, 3, "hellow", "c","d"]

console.log(differ(arrays));


function sum(a,b){
   
   if(a && b) return a + b;
   return function(b){
      return a + b;
   }
   
    
}

console.log(sum(1)(2));
console.log(sum(1,2))

function removeduplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (num === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(num);
    }
  }

  return result;
}

let array = [1, 18, 9, 81, 98, 124, 78, 78, 81];
console.log(removeduplicate(array));


// const nums = [1,2,3];
// const result = nums.forEach(x =>{ x * 2});
// console.log(result) undefined


// const a = (1,2,3)
// console.log(a)//3



// let a = {
    
//     name : "abhi"
// }

// let b = a;

// b.name = "sahil";
// console.log(b)//sahil
// console.log(a)//sahil object is assign by referance;


// let str = "myNameIsHaider";

// let result = str
//   .replace(/([A-Z])/g, " $1")          // add space before every capital letter
//   .trim()                              // remove leading/trailing space
//   .split(" ")                          // split words
//   .map(word => word[0].toUpperCase() + word.slice(1))  // capitalize first letter
//   .join(" ");

// console.log(result); // 👉 "My Name Is Haider";



// const obj1 = {};
// const obj2 = {
//   name: "utkarsh kesharwani"
// };
// const obj3 = {
//   name: "nikhil kesharwani"
// };

// obj1[obj2] = {
//   name: "aman kesharwani"
// };

// obj1[obj3] = {
//   name: "sidhant kesharwani"
// };

// console.log(obj1[obj2]);

// 1. console.log(parseInt('10+2'));

// parseInt reads the string from left to right until it hits a non-digit (in the specified radix, default 10).

// It reads '1' → valid

// '0' → valid

// '+' → stop parsing
// So it returns 10.

// 2. console.log(parseInt('7FN'))

// '7' → valid

// 'F' → in base 10, 'F' is not a digit, so parsing stops.
// Returns 7.

// 3. console.log(parseInt('M7F'))

// First character 'M' is not a digit in base 10, so parsing stops immediately.
// Returns NaN.

// console.log({1,2}.map(num=>0)

// console.log([1,2].map(num => {
//   if (num > 0) return 1
//   return num * 2
// }))


console.log("Hellow" + " World" + "\n" + "Coocking the code");


const user44 = {

  fullname : "Walter White"
}

user44.age = 45
user44.fullname = "leonol messy";
console.log(user44);

if(0){
    function getData(){}
}

console.log(getData)//undefined

if(1){
    function getData(){}
}

console.log(getData)// function body




// const obj = {x : 1};

// Object.freeze(obj);

// obj.x = 2;
// console.log(obj)

// const obj2 = {nested : {x : 1}};

// Object.freeze(obj2);

// obj2.nested.x = 2;
// console.log(obj2.nested.x)


// async function myLogic(){
 
 
// await new Promise((resolve,reject)=>{
     
     
     
//       setTimeout(()=>{
//         resolve("promiose resolve")
//         console.log("Print my data")
//     },1000)
     
//  })   
   
    
    
// }
//  await myLogic()
// console.log("A")

 
// console.log("b")


  const people = [
  { name: "Abhishek", age: 21 },
  { name: "Priya", age: 20 },
  { name: "Rohit", age: 21 },
  { name: "Sneha", age: 20 },
  { name: "Amit", age: 21 }
];


const group = Object.groupBy(people,(user)=>
 user.age
    
)

console.log(group);



// const people = [
//   { name: "Abhishek", age: 21 },
//   { name: "Priya", age: 20 },
//   { name: "Rohit", age: 21 },
//   { name: "Sneha", age: 20 },
//   { name: "Amit", age: 21 }
// ];



// let output = {};

// people.map(itom => {
    
//     if(output[itom.age]){
        
//         output[itom.age].push(itom)
        
//     }else{
//          output[itom.age] = [itom.age]
//     }
// })
// console.log(output)



// let Users = {
    
//     name : "anil",
//     age : 45,
//     email : "abhishek@132.com"
    
    
// }

// let info = "name";
// let getage = "age"
// console.log(Users[info])
// console.log(Users[getage])

function scope(){
    let a = b = 10;
    console.log("Inside function - a:", a); // 10
    console.log("Inside function - b:", b); // 10
}

scope();

console.log("Outside function - a:", typeof a); // "undefined"
console.log("Outside function - b:", b); // 10 (global!)


// let a = "hepo";
// let b = a;
// b = "bbb"
// console.log(b);//bbb
// console.log(a)//hepo

// Primitive types (strings, numbers, booleans, etc.) are passed by value

// When you assign b = a, b gets a copy of the value, not a reference to a

// Changing b does not affect a


// let [a,b] = "Abhishek";
// console.log(a,b)4


// let str = "hellow anil how are you?";

// let result = str.split(" ")
// .map(word => 
//     word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase()
// ).join("\n");

// console.log(result);

// let x = null;
// let y = null;
// console.log(x + y)//output 0


// let user = [1, 2, 3,"a"];
// user2 = {...user};
// console.log(user2)
// { '0': 1, '1': 2, '2': 3, '3': 'a' }

// const fruit = ['🍌', '🍊', '🍎'];

// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit)
// Step 1: Initial array
// fruit = ['🍌', '🍊', '🍎']

// Step 2: fruit.slice(0, 1)

// slice does not modify the original array, it just returns a new array containing elements from index 0 to 1 (excluding 1).

// So fruit remains:

// ['🍌', '🍊', '🍎']

// Step 2: fruit.slice(0, 1)

// slice does not modify the original array, it just returns a new array containing elements from index 0 to 1 (excluding 1).

// So fruit remains:

// ['🍌', '🍊', '🍎']

// Step 3: fruit.splice(0, 1)

// splice(start, deleteCount) modifies the original array.

// Removes 1 element starting from index 0 ('🍌').

// Now fruit becomes:

// ['🍊', '🍎']

// Step 4: fruit.unshift('🍇')

// unshift adds an element at the beginning of the array.

// Now fruit becomes:

// ['🍇', '🍊', '🍎']


// let emp = {
    
//     fistname : "Abhishek",
    
//      users : function(){
         
//          setTimeout(function(){
//              console.log(this.fistname)
//          })
         
         
//      }
    
    
    
// }

// console.log(emp.users())//undefined



// let emp = {
    
//     fistname : "Abhishek",
    
//      users : function(){
         
//          setTimeout(function(){
//              console.log(this.fistname)// undefined
//          }),
         
//           setTimeout(()=>{
//                console.log("arrow",this.fistname)//abhishek
//           })
         
         
//      }
    
    
    
// }

// console.log(emp.users())



function scoeped(){
     
    if(true){
        console.log(a);
        var a = 11;
          console.log(a);
        
    }
      console.log(a);
}
scoeped()



// let arr = [
//   { name: 'a', status: 'f' },
//   { name: 'b', status: 'p' },
//   { name: 'c', status: 'p' },
//   { name: 'd', status: 'p' },
//   { name: 'e', status: 'f' }
// ];

// let output = arr
//   .filter(res => res.status === 'p')   // ✅ Filters only objects with status 'p'
//   .map(res => res.name);               // ✅ Returns only the 'name' of those objects

// console.log(output);



// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(i => i = 5);
// console.log(result)


// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(i => i > 5);
// console.log(result)[false,false,false]


// console.log(x) // undefined
// console.log(abc)//function body
// var x = 100;

// function abc(xyz){
    
//     return xyz + xyz
// }



// var fruits = ["apple","mango", "grapes", "orange", "banana"];
// var fruits2 = "apple"
// console.log(fruits2.includes("ple"));

// var cars = {
//     name : "Ferrari",
//     color : "Red",
//     price :787
    
    
// }
// console.log("name" in cars);


// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
//   };
// }

// const closureExample = outerFunction("Hello");
// closureExample("World");

// spread operators

// function sum(a, b, c){
    
//     return a+b+c
    
// }

// let number = [1,2,3];


// console.log(sum(...number))


const User = {
    
    firstname : "Abhishek",
    
    value : function(){
        
        console.log(this);
        
        setTimeout(()=>{
               console.log(this);//object itself
        },1000)
        
        
    },

    value2:(()=>{

     console.log(this)//window object refer
     
    })
    
    
    
}

console.log(User.value());
console.log(User.value2());


const calculate = (a, b, operation) => {
    
    return operation(a,b)
    
}

let additon = calculate(5,9,function(num1,num2){
    
    return num1 + num2
    
})

console.log(additon)

let substraction = (a, b) => a - b;

const substr = calculate(10, 5,substraction);
console.log(substr);

const multipicatio  = (a, b)=> a * b;
const multi = calculate(12,5,multipicatio);
console.log(multi);


class Person{
    
    constructor(name){
        
        this.name = name
        
    }
    
    fn(){
        
        console.log(this.name)
        
    }
    
}

// const person = new Person("Mr.x");
// const copyFn = person.fn;
// copyFn()
// // why now it showing error

// You're extracting the method from the person object, so when you call copyFn() alone, this no longer refers to the person object. Instead, this becomes:

// undefined (in strict mode, which classes use by default)


// solutions
// class Person{
    
//     constructor(name){
        
//         this.name = name,
//         this.fn = this.fn.bind(this)
        
//     }
    
//     fn(){
        
//         console.log(this.name)
        
//     }
    
// }

// const person = new Person("Mr.x");
// const copyFn = person.fn;
// copyFn()





// function sum(){

//   return 2 + 2

// }


// function sq(){

//   return  4*4
// }
// let a = (sum(),sq());
// console.log(a)

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

// const x = {
//     3 : "c",
//     1 : "b",
//     2 : "d"
// }

// console.log(Object.keys(x))// [1,2,3]
// console.log(Object.values(x))//bdc it arrage accending order

// Simple array of employee objects
// const employees = [
//   {
//     id: 1,
//     name: "John Doe",
//     position: "Software Engineer",
//     department: "Engineering",
//     salary: 75000,
//     email: "john.doe@company.com"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     position: "Product Manager",
//     department: "Product",
//     salary: 85000,
//     email: "jane.smith@company.com"
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     position: "UX Designer",
//     department: "Design",
//     salary: 70000,
//     email: "mike.johnson@company.com"
//   }
// ];


// // Format first employee's name

// let result = employees.map(stu => stu.name.toUpperCase().charAt(0) + stu.name.slice(1));
// console.log(result)


// Simple array of employee objects
// const employees = [
//   {
//     id: 1,
//     name: "john doe",
//     position: "Software Engineer",
//     department: "Engineering",
//     salary: 75000,
//     email: "john.doe@company.com"
//   },
//   {
//     id: 2,
//     name: "jane smith",
//     position: "Product Manager",
//     department: "Product",
//     salary: 85000,
//     email: "jane.smith@company.com"
//   },
//   {
//     id: 3,
//     name: "mike johnson",
//     position: "UX Designer",
//     department: "Design",
//     salary: 70000,
//     email: "mike.johnson@company.com"
//   }
// ];


// // Format first employee's name

// const formattedEmployees = employees.map(employee => ({
//   ...employee,
//   name: employee.name
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ")
// }));

// console.log(formattedEmployees);
names = 10;

console.log(names)

let names = 10;
// ReferenceError: Cannot access 'names' before initialization

console.log(names)//undefined
var names = 10;

console.log(names)//10

// age = 20
// console.log(age)
// let age = 100;
// console.log(age)

// ERROR!
// /tmp/efFD3bUm4j/main.js:1
// age = 20
//     ^

// ReferenceError: Cannot access 'age' before initialization


// myFun();  // Output: "Second"

// var myFun = function () {
//     console.log("First");
// };

// myFun();  // Output: "First"

// function myFun() {
//     console.log("Second");
// }

// myFun();  // Output: "First"

// Hoisting Phase:
// 1. function myFun() { console.log("Second"); } ← Hoisted
// 2. var myFun; ← Hoisted (but function takes precedence)

// Execution Phase:
// 1. myFun() → "Second" (calls function declaration)
// 2. myFun = function() { console.log("First"); } ← Overwrites!
// 3. myFun() → "First" (calls function expression)
// 4. myFun() → "First" (still calls function expression)




// var variable = 10;
// (() =>{
//     console.log(variable);
    
//     variable = 20;
    
//     console.log(variable)
    
// })();

// console.log(variable);
// var  variable = 30;


// var value = 50;

// function valueable(){
//      console.log("value1",value);
    
//     value = 60;
    
//     console.log("value2",value)
    
// }
// valueable()

// console.log("value3",value);
// var  value = 30;



// function  getPrice(ProductName){


//   if(ProductName === "pizza"){
//        return 350;
//   }else if(ProductName === "burger"){
//     return 100;

//   }else if(ProductName === "sandwitch"){
//    return 80
//   }


// }


// const ket = [1, 2, 3, 4];
// for(const e in ket){

//   console.log(e, typeof e);
  

// }
//0 string
// practic.js:237 1 string
// practic.js:237 2 string
//even you  add number its data type is string
// it will return indexes


// const a = () => console.log('a')
// const b = () => console.log('b')
// const c = 'c'
// const d = 'd'

// console.log((a() && b()) || c || d)


// Step-by-step Execution:
// a() is executed first (due to left-to-right evaluation):

// console.log('a') executes → prints "a" to console

// a() returns undefined (since no explicit return)

// a() && b() evaluation:

// undefined && b() → since first operand is falsy, short-circuit occurs

// b() is NOT executed

// Result: undefined

// undefined || c || d evaluation:

// undefined || 'c' → undefined is falsy, so moves to 'c'

// 'c' is truthy, so short-circuits here

// Result: 'c'

// Final console.log():

// Prints the result: 'c'

// Output:
// text
// a
// c




// const uniqueId = Symbol('id');

// const User = {
    
//     name : "Alice",
//     [uniqueId] : 123,
//      [uniqueId] : 145
    
// }

// console.log(User.uniqueId);
// console.log(User[uniqueId]);

// console.log(Object.keys(User))


// const obj = { 1: "a", 2: "b", 3: "c" };

// console.log(obj.hasOwnProperty(1))
// In JavaScript, object property keys are always strings or symbols.
// If you use a number as a key in an object literal, it gets converted to a string.

// So { 1: "a" } is equivalent to { "1": "a" }.
// obj.hasOwnProperty("1")

// Checks if obj has own property with string key "1".

// Yes, it does.
// ✅ Output: true

// const set = new Set([1, 2, 3, 4, 5]);
// set.has("1")

// Checks if there is a string "1" in the set.

// The set contains numbers 1, 2, 3, 4, 5, not strings.

// "1" === 1 is false.
// ❌ Output: false

// set.has(1)

// function greet(greetType){
    
//     return function(name){
//         console.log(`${greetType} ${name}`)
//     }
    
// }

// let Sahellw = greet("Hellow");
// Sahellw("Mansi")
// Sahellw("nikhil")

//function + destructuring


// const Books = {
    
//     firstname : "daillyHabbits",
//     price : "90",
//     author  :  "jacks"
    
// }

// function dest({firstname,price,author}){
    
//     console.log(`book is ${firstname} price${price} and its suther is ${author}`)
    
// }

// dest(Books)

// const employees = [
//     { name: "John Doe", age: 28 },
//     { name: "Jane Smith", age: 32 },
//     { name: "Mike Johnson", age: 45 },
//     { name: "Sarah Wilson", age: 29 },
//     { name: "David Brown", age: 35 }
// ];

// let result = employees.filter(itom =>{
    
//     if(itom.age > 30 ){
       
//        return itom.name
//     }
    
    
// })
// .map(itom =>{
//  return   itom.name
// })
// .forEach(itom =>

// console.log(itom)
    
// )




// let arr = [10, 18, 7, 6, 11]
// i want index of two element  which is sum result is 13 like 7 and 6 achive without default method

// let arr = [10, 18, 7, 6, 11];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === 13) {
//             result = [i, j];
//             break;
//         }
//     }
//     if (result.length > 0) break;
// }

// console.log(result); // [2, 3] (indices of 7 and 6)


// console.log(isNaN ("Krishna"))




// let num  = [1, 2, 3, 4];
// const [a, ...b] = num.reverse();
// console.log(a);
// console.log(b)

// //output
// 4
// [ 3, 2, 1 ]



// let num  = [55, 67, 1, 3, 4, 2, 9, 6];
// const [a, ...b] = num.sort();
// console.log(a);1
// console.log(b);2,

// 1
// [
//   2,  3, 4, 55,
//   6, 67, 9
// ]

// === Code Execution Successful ===


// console.log("55" > "6"); // false
// Why "55" > "6" is false
// When comparing strings character by character:

// Compare first character: "5" vs "6"

// "5" comes before "6" in Unicode/ASCII

// So "5" < "6"

// Therefore "55" < "6" (and "55" > "6" is false)

// ASCII Values for Reference
// "5" = ASCII 53

// "6" = ASCII 54

// Since 53 < 54, the comparison stops at the first character.

// More Examples
// javascript
// console.log("55" > "6");   // false
// console.log("55" < "6");   // true
// console.log("10" > "2");   // false ("1" < "2")
// console.log("100" > "99"); // false ("1" < "9")
// This confirms why in your original array sort, 55 came before 6 - because when treated as strings, "55" < "6".


// console.log("uhku" > "6"); // true

 
//  console.log("u".charCodeAt(0))
// Compare first character: "u" vs "6"

// Check their Unicode values:

// "u" = Unicode 117

// "6" = Unicode 54

// Since 117 > 54, "u" > "6"

// Therefore "uhku" > "6"

// Unicode Order Summary
// In Unicode/ASCII order:

// Digits (0-9): 48-57

// Uppercase letters (A-Z): 65-90

// Lowercase letters (a-z): 97-122


console.log("uhku" > 5); // false

// Why "uhku" > 5 is false
// When comparing a string with a number in JavaScript:

// JavaScript tries to convert the string to a number for numerical comparison

// "uhku" converted to a number = NaN (Not a Number)

// Any comparison with NaN returns false

// i have two array in js  i want to combine then and sort it
// const array1 = [3, 1, 4];
// const array2 = [2, 5, 6];

// // Combine and sort
// const combined = array1.concat(array2).sort();
// console.log(combined); // [1, 2, 3, 4, 5, 6]
// const array1 = [3, 1, 4];
// const array2 = [2, 5, 6];

// const combined = [...array1, ...array2].sort();
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// function combineAndSortArrays(arr1, arr2) {
//     const result = [];
    
//     // Add all elements from first array
//     for (let i = 0; i < arr1.length; i++) {
//         result[result.length] = arr1[i];
//     }
    
//     // Add all elements from second array
//     for (let i = 0; i < arr2.length; i++) {
//         result[result.length] = arr2[i];
//     }
    
//     // ADD SORTING LOGIC - Bubble Sort
//     for (let i = 0; i < result.length; i++) {
//         for (let j = 0; j < result.length - 1; j++) {
//             if (result[j] > result[j + 1]) {
//                 // Swap elements
//                 const temp = result[j];
//                 result[j] = result[j + 1];
//                 result[j + 1] = temp;
//             }
//         }
//     }
    
//     return result;
// }

// const array1 = [3, 1, 4];
// const array2 = [2, 5, 6];
// console.log(combineAndSortArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]




function createBankAccound(initialBalance){
    
       let balance = initialBalance;
       
       return{
           
            deposit : function(amount){
                
                if(amount > 0){
                   balance +=  amount;
                   return `Deposited $${amount}. New balance: $${balance}`;
                }
                
            },
            
            witdrawl : function(amount){
                
                if(amount > 0 && amount <= balance){
                      balance -=  amount;
                   return `Deposited $${amount}. New balance: $${balance}`;
                    
                }
                
                return "Insufficient funds or invalid amount!";
                
                
            },
            
             getBalance: function() {
            return `Current balance: $${balance}`;
        }
           
           
           
           
       }
       
        
        
        
    
    
    
}

const myAccount = createBankAccound(1000);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(10000));
console.log(myAccount.witdrawl(2000));
console.log(myAccount.getBalance());


// Method 1: Using split(), reverse(), and join()
// javascript
// let arr = "the sky is blue";
// let result = arr.split(' ').reverse().join(' ');
// console.log(result); // "blue is sky the"

// Method 2: Using a for loop
// javascript
// let arr = "the sky is blue";
// let words = arr.split(' ');
// let reversed = '';

// for (let i = words.length - 1; i >= 0; i--) {
//     reversed += words[i] + (i > 0 ? ' ' : '');
// }
// console.log(reversed); // "blue is sky the"

// let arr = "the sky is blue";
// let result = arr.split(' ')  // Split into words
// .map(item => {
//     return item.split('').reverse().join("");  // Split word into chars, reverse, join back
// })
// .join(' ');  // Join the reversed words back together

// console.log(result); // "eht yks si eulb"

function x(){
  console.log("hello")
}

var x = undefined;
console.log(x)
x = 10// undefined

function x(){
  console.log("hello")
}

x(); // This would output "hello"

var x = undefined;
console.log(x) // undefined
x = 10


// var obj = {
//   a: "hello world",
//   b: 42
// };

// var b = "a";

// console.log(obj[b]);      // obj["a"]
// console.log(obj["b"]);    // obj["b"]

// Step-by-step:

// var b = "a";
// → b is a string with value "a".
// console.log(obj[b]);
// → obj[b] is the same as obj["a"] because b holds the string "a".
// → obj["a"] → "hello world"
// console.log(obj["b"]);
// → This directly accesses the property "b" on obj.
// → obj["b"] → 42



// let arr = ['a', 'b', 'a', 'c', 'd', 'e', 'e', 'b'];

// let dupArr1 = () => [...new Set(arr)];

// let dupArr2 = () => {
//   return arr.filter((item, pos) => {
//     return arr.indexOf(item) === pos;
//   });
// }


// var userName = "ABC";

// function print() {
//   console.log(userName);
// }

// function b() {
//   setTimeout(print, 0);
//   console.log(userName);
//   var userName = "MNO";
// }

// b();
// console.log(userName);

// var a = {
//   name: 'Hemant'
// };

// var b = 2;

// function change(tempA, tempB) {
//   tempA.name = 'Nikhil';
//   tempB = 3;
// }

// change(a, b);

// console.log(a.name, b);


// 

// a contains a reference to the object {name: 'Hemant'}

// When passed to change(), tempA gets a copy of that reference

// Both a and tempA point to the same object in memory

// Changing tempA.name modifies the original object

// b contains the actual value 2

// When passed to change(), tempB gets a copy of that value

// Changing tempB only affects the local copy, not the original b

// Key Concept: Pass-by-Value vs Pass-by-Reference
// JavaScript is always pass-by-value, but for objects, the "value" is a reference:

// Primitives (numbers, strings, booleans): Passed as actual values

// Objects (including arrays, functions): Passed as references to the same objec


// var a = { name: 'Hemant' };
// var b = 2;

// function change(tempA, tempB) {
//   tempA = { name: 'Nikhil' };    // REPLACING entire object
//   tempB = 3;                     // REPLACING primitive value
// }

// change(a, b);
// console.log(a.name, b); // Still outputs: "Hemant 2"


// const obj1 = { name: "Amit" }
// const obj2 = { name: "Rahul" }

// function showname() {
//   console.log(this.name)
// }

const boundFn = showname.bind(obj1);

// bind() creates a new function that, when called, has its this value set to obj1 permanently. So boundFn will always have this pointing to obj1.
// boundFn.call(obj2)

// Even though we're using .call(obj2) to try to change the context, a bound function's this cannot be changed again. So it still outputs "Amit"


// Output:

// text
// Amit
// Amit

// console.log(...'hello')
// This uses the spread operator on a string:

// Strings are iterable in JavaScript

// ...'hello' spreads the string into individual characters

// Equivalent to: console.log('h', 'e', 'l', 'l', 'o')

// Output: h e l l o

// console.log(...1234)
// This tries to use the spread operator on a number:

// Numbers are NOT iterable in JavaScript

// This will throw a TypeError

// Output: TypeError: 1234 is not iterable

// Working example with numbers:
// If you want to spread a number, you need to convert it to a string first:

// javascript
// console.log(...String(1234));  // "1" "2" "3" "4"
// console.log(...'1234');        // "1" "2" "3" "4"

// const x = "he".split(',');
// const y = ['h','e']
// console.log(x === y)  // strict equality
// console.log(x == y)   // loose equality

// both are false reason is both are pointing different memory location

// let result = (() => {
//     if (!fn) {
//         const fn = function() {
//             console.log('2');
//         }
//     }
//     fn();
// });

// if (!fn) {
//     function fn() {
//         console.log('2');
//     }
// }
// Here's what happens:

// fn is not defined in the current scope before this if statement

// !fn checks: "Is fn falsy?"

// In JavaScript, an undefined variable is falsy, so:

// fn = undefined

// !undefined = true

// Therefore, if (!fn) = if (true);


// var x = 1;
// function outer(){
//     console.log(x)
//     function inner(){
//         console.log(x)
//     }
    
//     var x = 2;
//     inner(); its 2
// }

// outer() its undefined

// var x = 1;
// function outer(){
//     console.log(x)
//     function inner(){
//         console.log(x)
//     }
//      inner();
//     var x = 2;its undefined
   
// }

// outer()its undefined


// function asyncOperation() {
//     let result;
//     setTimeout(function() {
//         result = "Async operation completed";
//         console.log(result);
//     }, 1000);
//     return function() {
//         console.log(result);
//     };
// }

// const asyncCallback = asyncOperation();
// asyncCallback();



// destructuring plus function

// const Books = {
//     bname: "DailyHabits",
//     prince:"90",
//     author: "nepolin hill"

    
    
// }

// function bookInfo({bname,prince,author}){
    
//     console.log(`Booksname is ${bname} and its price is ${prince} and its author is ${author}`)
    
// }

// bookInfo({...Books})


// const employees = [
//     { name: "John Doe", age: 28 },
//     { name: "Jane Smith", age: 32 },
//     { name: "Mike Johnson", age: 45 },
//     { name: "Sarah Wilson", age: 29 },
//     { name: "David Brown", age: 35 }
// ];

//  employees.filter(itom =>{
//     return itom.age > 30
// }).
// map((itom)=>{
    
//     return itom.name
// }).
// forEach(user =>
//     console.log(user) 
// )



// class Person{
    
//     constructor(name){
        
//         this.name = name;
//         this.fn = this.fn.bind(this)
        
//     }
    
//     fn(){
//         console.log(this.name)
//     }
    
    
// }

// const person = new Person("Mr x");
// const copyfn = person.fn;
// copyfn()
// why this code is work but not this


// class Person{
    
//     constructor(name){
        
//         this.name = name;
//         this.fn = this.fn.call(this)
        
//     }
    
//     fn(){
//         console.log(this.name)
//     }
    
    
// }

// const person = new Person("Mr x");
// const copyfn = person.fn;
// copyfn()

// Why the first code works but the second doesn't
// Let me explain the key difference between .bind(this) and .call(this):
//  this.fn = this.fn.bind(this)  // ✅ Returns a new bound function

//  Returns a new function that is permanently bound to the this context

// The original function is not called immediately

// copyfn now refers to the bound version that always has this pointing to the person instance

// class Person{
//     constructor(name){
//         this.name = name;
//         this.fn = this.fn.call(this)  // ❌ Calls the function immediately
//     }
    
//     fn(){
//         console.log(this.name)
//     }
// }

// const person = new Person("Mr x");
// const copyfn = person.fn;
// copyfn(); // TypeError: copyfn is not a function

// What .call(this) does:
// Immediately calls the function with the specified this context

// Returns whatever the function returns (in this case, undefined since fn() returns nothing)

// this.fn becomes undefined because fn() doesn't return anything

// copyfn is undefined, not a function


// console.log(8 + {});8[object Object]
// console.log( 5 + true)6


// let val = (10, 20);
// let a = 1, b = 2;
// let c = (a++, b++);
// console.log(val);20
// console.log(a, b, c)//2 3 2


// function foo(){
    
//     this.a = 1;
//     return {b : 2}
    
    
// }

// const result = new foo();
// console.log(result.a)
// console.log(result.b)

// console.log(1);

// const p = new Promise((resolve,reject)=>{
//     console.log(2);
//     resolve(4)
// })
// .then((res)=>{
//     console.log(res)
// })
// console.log(3)
//1
// 2
// 3
// 4


// 


// const key = "z";
// const obj = {
    
//     a:1,
//     [key] : 2,
//     '1':1
    
    
// }

// console.log(Object.keys(obj).join(', '))



// class Foo{
    
//     prop1 = this.id;
//     id = 5;
    
//     constructor(){
        
//         this.prop2 = this.id;
//         this.id = 10
        
        
//     }
    
    
    
// }


// const f = new Foo();
// console.log(f.prop1)
// console.log(f.prop2)


// function toNested(str){
    
//     const keys = str.split(".");
//     let result = {};
//    let  current = result
//     for(let key of keys){
//         current[key] = {}
//         current = current[key]
        
//     }
    
//     return result
    
    
// }

// console.log(toNested("a.b.c.d"));



// const numArr = [40, 1, 5, 200];
// numArr.sort((a,b)=> a -b)
// console.log(numArr)



// const arr = new Array(2).fill(1);
// console.log(arr);
// arr.forEach((itom)=>{
//     console.log("😊")
// })


// const arr = [];

// arr[10] = 10;

// console.log(arr)
// console.log(arr.length)

// console.log(null == 0) false


// let lifespan = {
    
//     9 : "impressive"
    
    
// }actually number is not able to assign a key but behing the  that number is converted into the string because its valid syntax;


// let lifespan = {
    
//     9 : "impressive"
    
    
// }
// console.log(lifespan)
// lefespan."100" = "🧀";also we are not able to assign  number dynamically event its string 

//we only use square bracket syntax for that



///create a function add without   using a function  arrow funciton

// let add = new Function("a","b","console.log(a+b)")

// add(10, 20)


// console.log(-0 == 0);
// console.log(-0 === 0);
// why both are true

// console.log(-1 == 1); false



// javascript
// const obj = {};

// obj[true] = "yes";
// // true is coerced to string "true"
// // obj becomes { "true": "yes" }

// obj[1] = "one";
// // 1 is coerced to string "1"
// // obj becomes { "true": "yes", "1": "one" }

// obj["1"] = "string 1";
// // "1" overwrites the existing "1" property
// // obj becomes { "true": "yes", "1": "string 1" }

// console.log(obj);
// Output:

// javascript
// { "1": "string 1", "true": "yes" }


// var length = 10;  // Global variable

// function fn() {
//     console.log(this.length);  // 'this' depends on how function is called
// }

// var obj = {
//     length: 5,
//     method: function (fn) {
//         fn();           // First call
//         arguments[0](); // Second call
//     },
// };

// obj.method(fn, 1);


// const deeplyNested = [
//   [1, 2],
//   [3, [4, 5, [6, 7]]],
//   [8, 9, 10]
// ];


//  let result = []
// function nestArray(arr){
    
   
    
//     arr.map((itom)=>{
    
//     if(Array.isArray(itom)){
        
//         nestArray(itom)
        
//     }else{
//         result.push(itom)
        
//     }
// })
  
    
// }

// console.log(nestArray(deeplyNested));
// console.log(result);

 
// console.log(foo())

// function foo(){
    
//     return 9
// }

// foo()
// var foo = function (){
    
//     return 9
// }



// var output = (function(x){
    
//     delete x;
//     return x
    
    
// })(0)

// console.log(output)//output is zero because we can delete local parameter


// function first(a){
   
//    return function (b){

//       return function (c){
//    console.log(a + b +c)
//       }

//    }


// }

// console.log(first(1)(2)) output is lastfunction it self 


// function test() {
//   let arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(() => console.log(i));
//   }
//   return arr;
// }

// const res = test();
// res[0](); 
// res[1](); 
// res[2](); 


// var i is function-scoped, not block-scoped.

// By the time the loop finishes, i = 3.

// Each function in arr refers to the same i (in the closure of test), which is 3 when they are called later.

// So each call res[0](), res[1](), res[2]() will print:


// for (var i = 0; i < 2; i++) {
//   setTimeout(console.log(i), 0);
// }

// Important: This is actually different from the previous example!
//0
// Output:
// text
// 0
// 1


// console.log(i) is executed immediately when setTimeout is called, not after the delay

// setTimeout(console.log(i), 0) means:

// Evaluate console.log(i) right now (prints current i)

// Pass the return value (undefined) to setTimeout as the function to call late



//<button id="btn">Click Me</button>
 
        // for (let i = 0; i < 5; i++) {
        //     button.addEventListener("click", function () {
        //         console.log("Button clicked", i);
        //     });
        // }

        
//         Button clicked 0
// Button clicked 1
// Button clicked 2
// Button clicked 3
// Button clicked 4


//<button id="btn">Click Me</button>
 
        // for (var i = 0; i < 5; i++) {
        //     button.addEventListener("click", function () {
        //         console.log("Button clicked", i);
        //     });
        // }

        
//         Button clicked 0
// Button clicked 5
// Button clicked 5
// Button clicked 5
// Button clicked 5


// const obj = {
//   a: 10,
//   b: function() {
//     return this.a + 5;
//   }
// };

// console.log(obj.b());  // (1)
// const fn = obj.b;
// console.log(fn());     // (2)

// (1) console.log(obj.b());

// When you call obj.b(),
// the function is called as a method of obj — so this refers to obj.

// Hence:

// this.a → obj.a → 10
// return 10 + 5 → 15

// 🔹 (2) const fn = obj.b; console.log(fn());

// Here, you are copying the function reference to fn
// but not the object context (obj).

// Now when you call fn():

// It’s a regular function call, not attached to any object.

// In non-strict mode, this defaults to the global object (window in browser).

// The global object does not have a property a, so this.a is undefined.

// Hence:

// this.a → undefined
// return undefined + 5 → NaN


// let x = 10;

// function modify(y) {
//   y = y * 2;
// }

// modify(x);
// console.log(x);


// Step-by-step explanation:

// let x = 10;
// → A variable x is declared and initialized with value 10.

// modify(x);
// → The value of x (which is 10) is passed by value to the function modify.
// So, inside the function, y becomes a copy of x.

// Inside modify:

// y = y * 2;  // y = 20


// ✅ Only y changes — not x, because primitives (like numbers) are passed by value in JavaScript.

// After the function finishes, the variable x is still 10.


// let x = 1 || 2 && 3;
// console.log(x)
//operation is start from right to left bcoz && operator have more predemcy


// find first unique charector

// let str = "level";

// for(let i = 0; i < str.length; i++){

//   if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){

//     console.log(str[i]);
//     break

//   }

// }


// let str = "level";
// let count = {}; // to store frequency of each character

// // Step 1: Count frequency manually
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (count[char]) {
//     count[char]++;   // increase count if already exists
//   } else {
//     count[char] = 1; // first time appearance
//   }
// }

// // Step 2: Find the first character with count = 1
// for (let i = 0; i < str.length; i++) {
//   if (count[str[i]] === 1) {
//     console.log("First unique character:", str[i]);
//     break;
//   }
// }



// i hav array [12, 0, 8, 0, 9,0] i want to move all zero to last in array


// let arr = [12, 0, 8, 0, 9, 0];
// let index = 0;

// // Move all non-zero elements to the front
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[index] = arr[i];
//     index++;
//   }
// }

// // Fill the rest with zeros
// while (index < arr.length) {
//   arr[index] = 0;
//   index++;
// }

// console.log(arr);

// let arr = [12, 0, 8, 0, 9, 0];
// arr = arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
// console.log(arr);


// function handle(){

//  throw Error("invalid operation")

// }


// function show( name = handle()){
  
//   return name

// }

// console.log(show("Abhishek"))

// setTimeout((a,b) => {
//   console.log(a + b)
// }, 0, 1, 2, 37);
// setTimeout syntax is:

// setTimeout(callback, delay, param1, param2, ...)


// After the delay, it calls the callback function and passes the extra parameters as its arguments.

// In your case:

// callback → (a, b) => console.log(a + b)

// delay → 0

// extra parameters → 1, 2, 37

// The callback function (a, b) will receive only the first two parameters:

// a = 1

// b = 2

// The 37 is ignored (since the function accepts only two arguments)


// console.log(NaN == NaN)
// console.log(NaN === NaN)

// console.log(null == null)
// console.log(null === null)


// let arr = [1, 2, 3, 4, 5];

// Array.prototype.sum = function(){
//   return this.reduce((acc,cur)=>{
//    return acc = acc + cur
//   })
// }


// console.log(arr.sum())
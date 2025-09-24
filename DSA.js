
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


// console.log([] == 0); 
// console.log([] === 0);

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
console.log(third);  // 3
console.log(fourth); // 4
console.log(fifth);  // 5
console.log(sixth);  // 6

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

console.log(name);    // 'John'
console.log(street);  // '123 Main St'
console.log(city);    // 'New York'
console.log(lat);     // 40.7128
console.log(lng);     // -74.0060;



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

let isDeveloper = true;

let object = {
  
  name : "monk",
  age : 29,
  ...(isDeveloper && {isDeveloper : true})


}

console.log(object)



// When JavaScript encounters break, it immediately exits the loop (no more iterations).
// // ➡️ Control moves to the next line of code after the loop.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break; // Stop the loop when i = 3
//   }
//   console.log(i);
// }
// console.log("Loop ended");


// continue keyword

// The continue statement skips the current iteration and moves to the next one.


// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // Skip the iteration when i = 3
//   }
//   console.log(i);
// }
// console.log("Loop finished");


// et obj = new Object({
  
//   name: 'ted coding monk',
//   age: new Date(),
//   skills :["node","react"]



// })


// let newObject = {...obj};
// obj.skills.push("nesxtjs");
// console.log(newObject)



// let obj = new Object({
//   name: 'ted coding monk',
//   age: new Date(),
//   skills: ["node", "react"]
// });

// console.log(obj);

// let newObject = { ...obj };   // 🧩 shallow copy
// obj.skills.push("nextjs");

// console.log(newObject);
// console.log(obj);

// 🔸 So the question:

// “Shallow copy is supposed to copy top-level properties.
// Then why does modifying obj.skills affect newObject.skills too?”

// ✅ Answer: Because skills is a reference type (array) — not a primitive value.

// 🔍 Deep Explanation:
// 1. Shallow copy copies references for nested objects

// When you use the spread operator ({...obj}) or Object.assign(),
// JavaScript copies only the top-level properties.

// For primitive values (string, number, boolean, etc.), it copies the value.

// For objects or arrays, it copies only the reference (memory address).




// let obj = new Object({
  
//   name: 'ted coding monk',
//   age: new Date(),
//   skills :["node","react"]



// })

// console.log(obj)
// // let newObject = JSON.parse(JSON.stringify(obj))
// let newObject = structuredClone(obj)
// newObject.skills.push("nesxtjs");
//  newObject.name = "sahil";
// console.log(newObject)
// console.log(obj)


// function canJump(nums) {
//   let maxReach = 0;

//   for (let i = 0; i < nums.length; i++) {

//     if (i > maxReach) {
//       return false;
//     }

//     // Update the farthest point we can reach
//     maxReach = Math.max(maxReach, i + nums[i]);

//     if (maxReach >= nums.length - 1) {
//       return true;
//     }
//   }

//   return true;
// }


// console.log(canJump([3, 2, 1, 0, 4]));  // true


// const newObj = {
//   a: 1,
//   b: "hello",
//   c: {
//     d: 2,
//     e: "world",
//     f: {
//       g: 3,
//       h: "javascript"
//     }
//   }
// }

// let alphabet = [];
// let numbers = [];

// function extractValues(obj) {
//   for(let key in obj) {
//     let value = obj[key];
    
//     if(typeof value === 'string') {
//       alphabet.push(value);
//     } else if(typeof value === 'number') {
//       numbers.push(value);
//     } else if(typeof value === 'object' && value !== null) {
//       extractValues(value);
//     }
//   }
// }

// extractValues(newObj);
// console.log("Alphabet:", alphabet); // ["hello", "world", "javascript"]
// console.log("Numbers:", numbers);   // [1, 2, 3]




// Use JSONPlaceholder - a free fake API
// async function fetchData() {

//   console.log("hellow word");
  
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     console.log("After await calling11....");
    
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);

//     }
    
//     const data = await response.json();
//      console.log("After await calling 2....");
//     return data;
   
    
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     throw err;
//   }
// }

// fetchData()
// .then((res)=>{
//   console.log(res);
  
// })
//  console.log("After await calling 4....");


// async function getDataAndSetValue() {
//   try {
//     const users = await fetchData();
//     console.log('Users received:', users);
    
//     // Set your values here
//     // Example: Store in variable, update UI, etc.
//     window.userData = users;
//     localStorage.setItem('users', JSON.stringify(users));
    
//     return users;
    
//   } catch (err) {
//     console.log('Failed to get data:', err);
//   }
// }

// getDataAndSetValue();


let gdiv = document.getElementById('gdiv');

let pdiv = document.getElementById('pdiv');

let btndiv = document.getElementById('btn');

gdiv.addEventListener('click',function(e){
  
  // e.stopPropagation()
  console.log(e.target);
 window.alert("gdiv",e.target)
},true)


pdiv.addEventListener('click',function(e){
  // e.stopPropagation()
  console.log(e);
  window.alert("pdivhghjg",e)
},true)


btndiv.addEventListener('click',function(e){
  //  e.stopPropagation()
  console.log(e.target);
  
  window.alert("btndiv")
},true)


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// })
// promise1.then(res => {
//     console.log(res)
// }
// console.log('end');

// start
// 1
// end
// 2


// for (var i = 0; i <= 10; i++) {
//   (function(j) {
//     setTimeout(() => {
//       console.log(j); 
//     }, 1000);
//   })(i);
// }
// why value of i is not overshadow by new one ;
// for (var i = 0; i <= 10; i++) {
//   setTimeout((j) => {
//     console.log(j); // Outputs: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   }, 1000, i);
// }



// Function.prototype.sum = function(...args){

//   return this(...args)

// }


// function addition(a,b){

//   return a + b;

// }

// console.log(addition.sum(25,50))




// Object.prototype.sumProperties = function(){
//   return Object.values(this)
//   .reduce((acc,cur)=> acc + cur)
// }




// const myObject = {
//    a : 50,
//    b : 75,
//    c : "n"

// }

// console.log(myObject.sumProperties())



// const arr = ["a","b","c","d"];

// // const obj = Object.assign({},arr);
// // console.log(obj)

// const obj = arr.reduce((acc,cur,index)=>{
   
//    acc[cur] = cur;
//    return acc
// },{})

// console.log(obj)

// const arr = ["a","b","c","d"];

// // const obj = Object.assign({},arr);
// // console.log(obj)
// const obj = {}
// arr.forEach((itom,index)=>{
     
//      obj[itom] = itom
     
// })

// console.log(obj)


// Method 2: Using Spread Operator
// javascript
// const arr = ["a","b","c","d"];
// const obj = {...arr};
// console.log(obj);

// const entries = [['name', 'John'], ['age', 30], ['city', 'NYC']];
// const obj = Object.fromEntries(entries);
// console.log(obj);
// Output: { name: "John", age: 30, city: "NYC" }

// const entries = [['name', 'John'], ['age', 30], ['city', 'NYC']];

// function arrayToObject(entries) {
//     const obj = {};
//     for (let i = 0; i < entries.length; i++) {
//         const [key, value] = entries[i];
//         obj[key] = value;
//     }
//     return obj;
// }

// const result = arrayToObject(entries);
// console.log(result);
// // Output: { name: "John", age: 30, city: "NYC" }const entries = [['name', 'John'], ['age', 30], ['city', 'NYC']];

// function arrayToObject(entries) {
//     const obj = {};
//     for (let i = 0; i < entries.length; i++) {
//         const [key, value] = entries[i];
//         obj[key] = value;
//     }
//     return obj;
// }

// const result = arrayToObject(entries);
// console.log(result);
// Output: { name: "John", age: 30, city: "NYC" }


// let str = "abcde";
// let count = 2;
// let res = "";


// for(let i = str.length - count; i < str.length;i++){
   
//    res += str[i]

// }

// for(let i = 0; i < str.length - count; i++){

//   res += str[i]

// }

// console.log(res)


// let char = "abcde";
// let count = 2;

// let part1 = char.slice(-count);
// let part2 = char.slice(0, char.length -count);

// let rotate = part1 + part2;
// console.log(rotate)


// let arr = [];
// let count = 5;

// for (let i = 1; i <= count; i++) {
//   arr.push(i);
// }

// console.log(arr);  // [1, 2, 3, 4, 5]


// let arr = Array(count).fill("item");
// console.log(arr);  // ["item","item","item","item","item"]

// const isLoggedIn = true;
// isLoggedIn && console.log("Welcome User!");
// prints Welcome User!


// function getDiscount(userType) {
//     if (userType == 'region') {
//         return amount * 0.1;
//     } else if (userType == 'precision') {
//         return amount * 0.2;
//     } else if (userType == 'gold') {
//         return amount * 0.3;
//     }
// }


// console.log(getDiscount("region"))


// const discountStrategies = {
//     regular: (amount) => amount * 0.1,
//     premium: (amount) => amount * 0.2,
//     gold: (amount) => amount * 0.3
// };

// function getDiscount(userType, amount) {
//     const strategy = discountStrategies[userType];
//     console.log(strategy);
//     return strategy ? strategy(amount) : amount;
// }

// // To add new type
// discountStrategies.platinum = (amount) => amount * 0.4;

// typeConversions.js

// function greet() {
//     console.log("Hello, " + this.name);
// }

// const obj1 = greet();// hellow undefine
// const obj2 = new greet(); // hello undefined

// console.log("---");

// console.log(obj1); undefined
// console.log(obj2); // []

// const arr = [10, 20, 10, 20, 30];
// const distinct = [];
// arr.forEach(item => {
//     if (!distinct.includes(item)) {
//         distinct.push(item);
//     }
// });
// console.log(distinct); // [10, 20, 30]



// let a = {name : "ram", age :25, city: "odisha"};

// let b = {...a,name:"rahul"};

// const {name, ...xyz} = a;
// console.log(xyz,b)


// function wordPattern(pattern, s) {
//     const words = s.split(' ');
    
//     if (pattern.length !== words.length) return false;
    
//     const charMap = {};  // pattern char -> word
//     const wordMap = {};  // word -> pattern char
    
//     for (let i = 0; i < pattern.length; i++) {
//         const char = pattern[i];
//         const word = words[i];
        
//         // Check if we have a conflict in either mapping
//         if (charMap[char] !== undefined && charMap[char] !== word) return false;
//         if (wordMap[word] !== undefined && wordMap[word] !== char) return false;
        
//         // Create the mappings
//         charMap[char] = word;
//         wordMap[word] = char;
//     }
    
//     return true;
// }

// console.log(wordPattern("abbbc", "dog cat cat fish"));  // true


// function climbStairs(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
    
//     let first = 1;
//     let second = 2;
    
//     for (let i = 3; i <= n; i++) {
//         const third = first + second;
//         first = second;
//         second = third;
//     }
    
//     return second;
// }

// console.log(climbStairs(5))


// function maxAscendingSum(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return nums[0];
    
//     let maxSum = nums[0];
//     let currentSum = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
//         // Strictly increasing (use >= for non-decreasing)
//         if (nums[i] > nums[i - 1]) {
//             currentSum += nums[i];
//         } else {
//             // Reset for new ascending subarray
//             maxSum = Math.max(maxSum, currentSum);
//             currentSum = nums[i];
//         }
//     }
    
//     // Don't forget the last subarray
//     return Math.max(maxSum, currentSum);
// }

// // Test the function
// console.log(maxAscendingSum([10, 20, 30, 5, 10, 5])); // 65



function brokenCalc(startValue, target) {
    let operations = 0;
    let current = target;
    
    while (current > startValue) {
        if (current % 2 === 0) {
            // If even, divide by 2 (reverse of multiply)
            current /= 2;
        } else {
            // If odd, add 1 (reverse of subtract)
            current += 1;
        }
        operations++;
    }
    
    // Once current <= startValue, we just need to add the difference
    return operations + (startValue - current);
}

console.log(brokenCalc(5, 10) )



function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    // Calculate suffix products and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));


function findOneMismatch(arr, target) {
    const result = [];
    
    for (const str of arr) {
        if (str.length !== target.length) continue;
        
        let mismatches = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== target[i]) {
                mismatches++;
                if (mismatches > 1) break;
            }
        }
        
        if (mismatches === 1) {
            result.push(str);
        }
    }
    
    return result;
}


function finduniqnum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    
    if (isUnique) {
      return arr[i]; // Return first unique number found
    }
  }
  
  return null; // Return null if no unique number found
}

console.log(finduniqnum([1, 21, 1, 45, 2, 3])); // 21



// function partitionLabels(s) {
//     const lastOccurrence = {};
//     const result = [];
    
//     // Step 1: Store last occurrence of each character
//     for (let i = 0; i < s.length; i++) {
//         lastOccurrence[s[i]] = i;
//     }
    
//     // Step 2: Determine partitions
//     let start = 0;
//     let end = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         // Expand the current partition to include last occurrence of current char
//         end = Math.max(end, lastOccurrence[s[i]]);
        
//         // If we reached the end of current partition
//         if (i === end) {
//             result.push(end - start + 1);
//             start = i + 1;
//         }
//     }
    
//     return result;
// }

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij"


function canCompleteCircuit(gas, cost) {
    const n = gas.length;
    
    for (let start = 0; start < n; start++) {
        let tank = 0;
        let possible = true;
        
        for (let i = 0; i < n; i++) {
            const current = (start + i) % n;
            tank += gas[current] - cost[current];
            
            if (tank < 0) {
                possible = false;
                break;
            }
        }
        
        if (possible) return start;
    }
    
    return -1;
}


//------------------------------------------------------------------------------------------

// const user = {name : "abhi"};


// user = {age : 2};

// console.log(user)
//You cannot assign a new object to that variable later.


// ----------------------------------------------------------------------------------------------

// let user = {name : "abhi"};


// user = {age : 2};

// console.log(user)

// But the content inside the object CAN be changed

// The object is still mutable.
// You can add, remove, or update its properties

// Why?

// const makes the variable binding constant, not the value.

// The memory address stored in user cannot change.

// But the object at that memory address can change.


// | Operation                        | Allowed? | Why                           |
// | -------------------------------- | -------- | ----------------------------- |
// | Change object properties         | ✅ Yes    | Object is mutable             |
// | Add new property                 | ✅ Yes    | Object is mutable             |
// | Delete property                  | ✅ Yes    | Object is mutable             |
// | Reassign the variable completely | ❌ No     | `const` prevents reassignment |

//-------------------------------------------------------------------------------



// const original = {
//   name: "Abhi",
//   age: 25
// };

// // Shallow copy
// const copy = { ...original };

// original.name = "Rahul";

// console.log(original.name); // Rahul
// console.log(copy.name); //Abhi : change will be not reflect duplicate

//-------------------------------------------------------------------
// const original = {
//   name: "Abhi",
//   age: 25
// };

// // Shallow copy
//  original.name = "Rahul";
// const copy = { ...original };

//

// console.log(original.name); // Rahul
// console.log(copy.name); //Abhi : change will be  reflect duplicate

//4--------------------------------------------------------------------------

// const original = {
//   name: "Abhi",
//   address: {
//     city: "Pune",
//     pin: 411001
//   }
// };

// // Shallow copy
// const copy = { ...original };

// // Change nested object property
// original.address.city = "Mumbai";

// console.log(original.address.city); // Mumbai
// console.log(copy.address.city);     // Mumbai  ✔ reflected

//---------------------------------------
// call/aplly/bind

// function getAge(a,b) {
//   console.log(this.age,a,b);
// }

// let user = {age : 35}
// getAge.call(user,12,15)



// function greet(a,b){

//    console.log(this.name, a, b)


// }

// user = {name : "suresh"}

// greet.apply(user,[20,30])


//---------------------------------------------------------------------------------------

// because arrow functions don’t have their own this → they take this from the parent scope.

// Example
// const user = { name: "Abhi" };

// const show = () => {
//   console.log(this.name);
// };

// show.call(user);  // ❌ still undefined


// ✔ this does NOT change
// ✔ should use normal function if this needs to change


// const person = {
//   name: "Abhi",
//   show() {
//     console.log(this.name);
//   }
// };

// const user = { name: "Rahul" };

// // person.show.call(user);

// function a() {
//   console.log(this.value);
// }

// const obj1 = { value: 10 };
// const obj2 = { value: 99 };

// a.call(obj1);
// a.bind(obj2)(); 


// const obj = {
//   name: "Abhi",
//   print: function () {
//     console.log(this.name);
//   },
// };

// const newPrint = obj.print.bind({ name: "Rahul" });

// newPrint();
// obj.print();

// const obj = { name: "Abhi" };

// function f1() {
//   return () => {
//     console.log(this.name);
//   };
// }

// f1.call({ name: "Rahul" })();



// const obj = { name: "Abhi" };

// const fn = (() => {
//   console.log(this.name);
// }).bind(obj);

// fn();
// Step 1 → Where is the arrow function created?
// It is created in the global scope.

// In global scope:

// ini
// Copy code
// this = window (browser)
// this = {} (node)
// Since your arrow function is created in the global scope:

// javascript
// Copy code
// this.name  → undefined
// Step 2 → What does bind(obj) do?
// It tries to set this = obj, but…

// ❗ Arrow function ignores it because arrow function has NO its own this.
// Bind works only on normal functions, not on arrow functions.

// Arrow functions ignore:

// call()

// apply()

// bind()

// Because arrow functions do NOT have their own this.

// They always take this from the parent scope (lexical scope), not from the invocation.

// const obj = { name: "Abhi" };

// const fn = () => {
//   console.log(this.name);
// };

// fn.call(obj);   // ❌ ignored
// fn.apply(obj);  // ❌ ignored
// fn.bind(obj)(); // ❌ ignored

// Compare with normal function:
// function fn() {
//   console.log(this.name);
// }

// fn.call({ name: "Abhi" }); // ✔ Works
// fn.apply({ name: "Rahul" }); // ✔ Works
// fn.bind({ name: "Rohan" })(); // ✔ Works




// let arr = ["Walter", "Skylar", "Jesses"]

// let newArr = arr.push("Gus");
// console.log( newArr) it will return length

// console.log(arr) but when we print arr return array




// function greet(){

// console.log("noice")

// }
// greet()

// function greet(){

//   console.log("toit")


// }
// greet()// output is toit last is overite by new




// let greet =() =>{

// console.log("noice")

// }
// greet()

// function greet(){

//   console.log("toit")


// }
// greet() // but it will show errors

// const arr = ["name"];
// const obj = {};

// obj.name = "FrontendMaster";
// obj[arr] = "React";

// console.log(obj.name);

// arr is ["name"].

// When you use an object key like obj[arr], JavaScript converts the key to a string.

// ["name"].toString() → "name"

// obj.name = "FrontendMaster";  // initially
// obj["name"] = "React";        // overwrites previous value
// So now obj is:

// js
// Copy code
// {
//   name: "React"
//}


// var objA = { prop1: 42 };
// var objB = objA;
// objB = {}; it will create a new referance for that objb
// console.log(objA);


// ar objB = objA;
// Both objA and objB now point to the same object: { prop1: 42 }.
// Now objB points to a new empty object {}.

// objA is not affected because it still points to the original object
// Output:

// { prop1: 42 }

// console.log(+[] + [5] + [1,2]) //051,2
// console.log([] + [5] + [1,2]) //51,2
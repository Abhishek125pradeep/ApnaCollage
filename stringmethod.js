

const str = "hellowll";
console.log(str.length);
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(0));
console.log(str.indexOf('e'));
console.log(str.indexOf('h'));
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));


const Char = "Javascript";
console.log(Char.slice(0,4));
console.log(Char.slice(4));
console.log(Char.slice(-6));
console.log(Char.slice(-8));
console.log(Char.slice(-3));
// console.log(Char.charAt(7));
// slice(-6) means start 6 characters from the end.
//
// Length of string = 10

// -6 → 10 - 6 = 4 → so it starts at index 4.


let str2 = "JavaScript";

console.log(str2.substring(0, 4));  // "Java"
console.log(str2.substring(4, 10)); // "Script"
console.log(str2.substring(4)); 


console.log(str2.substring(4, 0)); // "Java" (same as substring(0,4))
// Negative values are treated as 0:

console.log(str2.substring(-4, 4)); // "Java"


console.log(str2.length);  
console.log(str2.slice(-6));       // "Script" ✅ works with negative
console.log(str2.substring(-6));   // "JavaScript" ❌ negative → 0


console.log(str.substr(0, 4));   // "Java" (start=0, length=4)
console.log(str.substr(4, 6));   // "Script" (start=4, length=6)
console.log(str.substr(-6, 6));  // "Script" (start from -6 → count from end)


var str4 = "Hellow Creative Developer";
console.log(str4.split(' '));
console.log(str4.split(''));
console.log(str4.includes(''));



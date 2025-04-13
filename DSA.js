

// // let age = prompt("What is Your age");
// // let changenumber = parseInt(age);
// // console.log(changenumber);

// // document.write(age)
// // console.log(age);

// // if we change one data type into another data type that is known as typecasting ;

// // let a = 10;
// // let b = 20;

// // let c = a;
// // console.log(c);
// // a = b;
// // c = a;

// // b = c;
// // console.log(b);


// // console.log(c);



// // let a = 10;
// // let b = 20;

// // a = a + b ; // a = 10 , b =20 , a= 30
// // b = a - b; // a= 30, b= 20, b= 10
// // a = a - b
// // console.log(a);
// // console.log(b);

// // let a = 10;
// // let b = 20;

// // [a,b] = [b,a];
// // console.log(a,b);


// // let a = 10;
// // let b = 30;

// // console.log(b / a);
// // console.log(b % a);
// // console.log(7 / 3);
// // console.log(Math.floor(7 / 3));
// // console.log(Math.ceil(7 / 3));



// // let c = 5443;
// // console.log(c % 10);// answer is always lastdigits



// // const str = "Subscribe to Roadsidecoder";
// // for(let i = 0; i < str.length ; i++){
// //             console.log(str[i],i);

// // }


// // const User = {
// //     name : "Roadside Coder",
// //     age : 24,
// //     isTotallyawesone : true

// // }

// // for(key in User){
// //     console.log(`${key} : ${User[key]}`);

// // }

// // let array = [4,5,61,7,6];

// // array.forEach((value, index, arr)=>{
// //     console.log(value,index,arr);

// // })


// // function  arrayfunction(n){
// //      debugger;
// //    if(n === 0){
// //    return 1
// //    }else{
// //     return n * arrayfunction(n - 1)
// //    }      


// // }
// // console.log(arrayfunction(5));


// // function apple(){
// //     console.log("Called..");

// //     apple()

// // }
// // let a = 10;
// // let b = 20;
// //  console.log(12 + "13");
// //  console.log("sum of 10 and 20 " + a + b );
// //  console.log(a + b + "sum of 10 and 20 "  );
// //  console.log("sum of 10 and 20 is " + (a + b));//if i implement bracket its prioritirise
// //  console.log("1" - 1); //only + operator perform  contcant otherwise all perfom arithmatica operration between string and number
// //  console.log("12" * 2);
// //  console.log("1" / 1);
// //  console.log("1" % 1);


// //  let a = 10;
// //  let b = 20;

// // a = a + b //a = 30
// // b = a - b // b = 10
// // a = a - b //a = 20
// // console.log(a , b  );

// // [a,b] = [b,a];
// // console.log(a);
// // console.log(b);



// //  let c = a; // c = 10, a = 10
// //  a = b;// a =20, b = 20
// //  b = c;// c = 10, b = 10


// //  console.log(a , b, c);


// function greet() {
//     return "Congrass"
// };

// let x = greet();
// console.log(x);
//solution will right to left
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(2 > 1 > 0);
// console.log(2 < 3 < 1);
// console.log(3 > 2 == 1);
// console.log(3 < 2 == 0);
// console.log(false == 0);
// console.log(false === 0);
// console.log(null == undefined); // in this type coersion rule os applied and and output will be true
// // In JavaScript, the == operator performs a loose equality comparison, which means it allows type coercion before comparing the values.

// // null represents the intentional absence of any object value.
// // undefined represents a variable that has been declared but not assigned a value, or a value that is not defined.
// // When comparing null == undefined:

// // The == operator considers null and undefined to be equal because they both represent an absence of value
// console.log(null === undefined);
// console.log([] == false);
// Output: true
// console.log(5 + "5");
// console.log("10" - 2);
// console.log("10" * "2");
// console.log("10" / "2");
// console.log("10" + 2);
// console.log(5 + true);
// console.log(5 + false);
// console.log("5" + true);'
// Output: "5true"
// console.log(10 == "10");
// console.log(10 === "10");
// console.log("5" - -"5");
// console.log("10" - "5" + "5");  
// console.log("10" - "5" + "5");
// 👉 Output: "55"
// console.log("10" - "5" - "5"); 
// console.log("5" * []); 
// "5" is a string, but the * operator forces numeric conversion.

// "5" is converted to 5.
// [] (Empty Array) is converted to a number.

// In JavaScript, when an array is used in a numeric context, it first tries .valueOf(), but that returns the array itself.
// Then, it calls .toString(), which returns an empty string ("").
// The empty string "" is then converted to 0 when used in a numeric operation.
// console.log("5" * {}); 
// "5" is a string, but the * operator forces numeric conversion.

// "5" is converted to 5.
// {} (empty object) needs to be converted to a number.

// JavaScript first tries .valueOf() on {}, which returns the object itself.
// Then, it tries .toString(), which returns "[object Object]".
// JavaScript attempts to convert "[object Object]" into a number, but it fails.
// Since "[object Object]" is not a valid number, the result is NaN (Not a Number).
// console.log([] + {});  
// console.log({} + []); 
// console.log([] == ![]); 
// console.log("true" == true);  
// console.log(!!"false" == !!"true"); 
console.log([] + []);  // ""  (empty string)
console.log([] + {});  // "[object Object]"
console.log({} + []);  // "[object Object]" (but might behave differently in some environments)
console.log({} + {});  // NaN in some cases or "[object Object][object Object]" in some environments



// // When {} (an empty object) is used in a numeric operation, JavaScript tries to convert it to a primitive value.
// // First, JavaScript calls .toString() on {}:
// // js
// // Copy
// // Edit
// // {}.toString() → "[object Object]"
// // Then, JavaScript tries to convert "[object Object]" to a number:
// // js
// // Copy
// // Edit
// // Number("[object Object]") → NaN
// // console.log([] === false);
// // Understanding == (Loose Equality)

// // The == operator performs type coercion before comparison.
// // JavaScript tries to convert both values to a common type before comparing them.

// const arr = [1, ,3,,5];
// console.log(arr.map((x)=> x*2));

// const getCounter = ()=>{
//     let count = 0;
//     return ()=> ++ count;
// }
// const counter = getCounter(); // getCounter() returns a function
// console.log(counter()); // 0
// console.log(counter());


// // function recuriosn(x){
// //     console.log("Hellow");
// //     if(x > 1){
// //         recuriosn(x - 1)
// //     }

// // }
// // recuriosn(10)

// function recursion(x) {


//     if(x  ===  1){
//         return 1;
//     }else{
//       return x * recursion(x - 1) ;
//     }
// }
// console.log(recursion(5));


// // console.log(printName());


// // var printName = function printName(){// example of function expression
// //     return "Hellow Javascript"
// // }


// const obj = {
//     name : "x",
//     data : {
//         price : 10
//     }
// }
// console.log(obj.data.price);

// const newObj = obj;
// newObj.data.price = 100;
// console.log(newObj.data.price);

// const array = [1, 2, 3, 4,5];
//  newArray = array.map((val,index)=>{
//     if(index < 3){
//        return val
//     }
// })
// console.log(newArray);

// // The map() function always returns an array of the same length as the original array.
// // The if (index < 3) condition means that only elements at indexes 0, 1, and 2 will be returned.
// // If index >= 3, the callback function doesn't return anything, which results in undefined for those positions.
// // The output array maintains the same length as array, filling missing values with undefined.


// // for(var i = 0; i < 4; i++){
// //      setTimeout(()=>{
// //          console.log(i);

// //      },10)
// // }

// // var firstName = "Javascript";

// // function printName(){
// //     const firstName = "HTML";
// //     console.log(firstName);

// // }
// // console.log(firstName);
// // printName()

// const obj1 = {i: 80, j:90};
// const { i , j} = obj1;
// console.log(i , j);


// const arr2 = [1, 2, 3];

// const resultArr = arr2.map((val,index)=>{

//     if(index > 0){
//        arr2.push(5)
//     }
//     return val
// });
// console.log(resultArr,arr2);

// console.log(null == 0);
// console.log(null > 0);
// When using comparison operators (<, >, <=, >=), JavaScript converts null to a number.
// console.log(null >= 0);
// console.log(null == undefined);
// null only loosely equals undefined,
// console.log(null == 0);
// 👉 Output: false

// 📌 Reason:

// The == (loose equality) operator does not convert null to 0.
// Instead, null only loosely equals undefined, and nothing else.

// // JavaScript follows type coercion when comparing values with ==, >, and >=.

// // null == 0 → false

// // == (loose equality) does not convert null to a number.
// // Instead, null is only loosely equal to undefined.
// // So, null == 0 is false.
// // null > 0 → false

// // When using relational operators (>, <, >=, <=), JavaScript converts null to a number (0).
// // So, null > 0 becomes 0 > 0, which is false.
// // null >= 0 → true

// // null is converted to 0, so null >= 0 becomes 0 >= 0, which is true.
// // Key Takeaways:
// // Loose equality (==) does not convert null to a number, only equates it with undefined.
// // Comparison operators (>, <, >=, <=) convert null to 0 before evaluating.


// function fun1(fun){
//     fun()
// }

// function fun2(){
//     console.log("i am calling");

// }

// fun1(fun2);



// // var a = 10;
// // var b = 20;

// // var [b ,a] = [a,b]
// // console.log(b,a);
// // Let me explain why you're seeing an error with const but not with var in this code.

// // The issue is with how variable declarations work in JavaScript:

// // Using var (works):
// // javascript
// // Wrap
// // Copy
// // var a = 10;
// // var b = 20;
// // var [b, a] = [a, b];  // This works
// // console.log(b, a);    // Outputs: 10 20
// // Using const (errors):
// // javascript
// // Wrap
// // Copy
// // var a = 10;
// // var b = 20;
// // const [b, a] = [a, b];  // SyntaxError: Identifier 'b' has already been declared
// // console.log(b, a);
// // Why this happens:

// // var allows redeclaration of variables in the same scope.
// //  When you write var [b, a] = [a, b], it redeclares b and a without complaint.
// // const (and let) 
// // don't allow redeclaration in the same scope. When you try const [b, a] = [a, b], JavaScript sees you'
// // re trying to declare b and a again in the same scope where they already exist, which is illegal with const.


//  let array2 = [4,5,61,7,6];

//  array2.forEach((value,index,arraya)=>{
//     console.log(value,index,arraya);

// })

// // let char= 11;
// // Val = char++ + ++char;
// // console.log(Val);

// // let n = 10;
// // let m = n-- - --n + n++;
// // console.log(m);

// var a = 1;
// a++;
// console.log(a);
// console.log(++a);
// console.log(++a);


// const num = [2].push(5);
// console.log(num);


// let w = 1;
// let y = null;
// console.log(++w, ++y);
// // y is a string ("1").
// // In JavaScript, the ++ operator performs type coercion when applied to a non-number:
// // It attempts to convert the string to a number using the unary plus operator (implicitly).
// // "1" is coerced to the number 1.

// let m = 1;
// let n = ++m + m;// that firt m value is 2  and second m value also 2
// console.log(n);

// let e = 4;
// let f = 2;
// let g = e++ + ++f + f++;//in this case first e =4, f=3,f=3;
// console.log(g);

// let h = [2];
// let o = 2;
// console.log(h == o);


// let l = 5;
// let k = l++;
// let opps= l + k;
// console.log(opps);


// let number= 0;
// console.log(number++);
// console.log(++number);
// console.log(number++);


// // var kk = 5;
// // {
// //     console.log(kk);
// //     let kk = 20;
// //     console.log(kk);


// // }
// // JavaScript prioritizes local (block-scoped) variables over global ones in the same scope.
// // ✔️ The "Temporal Dead Zone" (TDZ) prevents access to let and const variables before they are

// const fruits = ["apple", "banana", "orange"];
// console.log(typeof  fruits);
// const result = fruits.join();
// console.log(result);
// console.log(typeof  result);


// function hii(){
//    return "hellow baby"   
// }
// console.log(typeof hii());

// console.log( 1 || 2 && 3);
// 2 && 3
// // Step 1: 2 is truthy, so it moves to the next operand.
// // Step 2: 3 is also truthy.
// // Step 3: Since both operands are truthy, && returns the second operand → 3.
// // Understanding && (Logical AND) in JavaScript
// // The && (AND) operator works as follows:

// // It evaluates the first operand.
// // If the first operand is falsy, it returns that operand immediately.
// // If the first operand is truthy, it returns the second operand (no matter what it is).
// // && (Logical AND) → Higher precedence
// // || (Logical OR) → Lower precedence
// // The && operator returns the second operand if both operands are truthy.
// // Both 2 and 3 are truthy values.
// // Result: 3
// 1 || 3
// // Step 1: The first operand is 1 (which is truthy).
// // Step 2: Since || (OR) returns the first truthy value, it returns 1 immediately.
// // Step 3: The second operand (3) is never even evaluated because 1 is already truthy.
// // Understanding || (Logical OR) in JavaScript
// // The || (OR) operator works as follows:

// // It evaluates the first operand.
// // If the first operand is truthy, it returns that operand immediately (ignores the second operand).
// // If the first operand is falsy, it returns the second operand.

// // The || operator returns the first truthy value it encounters.
// // 1 is truthy, so it immediately returns 1 without evaluating the second operand.
// console.log(2 && 3);   // 3 (because both are truthy)
// console.log(0 && 3);   // 0 (stops at first falsy value)
// console.log(false && 2);  // false (stops at first falsy value)
// console.log("hello" && "world"); // "world" (both are truthy, returns last)


// let object = {

//     a: 10,
//     b:undefined,
//     c:null



// };
// console.log(JSON.stringify(object));



// // let objects = {a : 10, b:20};
// // console.log(objects);
// // delete objects.a;
// // console.log(objects);

// // let chare = 10;
// //  delete chare;
// //  console.log(chare);
// //  var xyx = 100;
// // delete window.xyz;
// // console.log(xyz); // ReferenceError: x is not defined

// // ✅ delete only works on object properties.
// // ❌ delete does not work on variables or function parameters.
// // ❌ delete does not work on primitive types (strings, numbers, booleans, etc.).
// // ✅ delete can remove global var-declared variables from window.

// // let output = (function(x){  //However, x is a local variable (a function parameter), not an object property.
// //     delete x;
// //     return x;
// // })(3);
// // console.log(output);

// var arraray_1 = ['a','b','c'];
// var arraray_2 = arraray_1;
// arraray_2.length = 0;
// console.log(arraray_1 , arraray_2);
// // Shallow Copy vs. Deep Copy
// // Shallow Copy: Copies the reference to the original object (not the actual data).
// // Deep Copy: Creates a completely new copy of the object, including nested objects/arrays.

// // var arraray_3 = ['a','b','c'];
// // var arraray_4 = [...arraray_1];
// // arraray_4.length = 0;
// // console.log(arraray_3, arraray_4);

// // var mkmlk = 5;
// // var klkj = mkmlk++;
// // let sdf = mkmlk + klkj;
// // console.log(sdf);


// const getEncounter =()=>{
//    let count  = 0;
//    return ()=> ++ count;
// }
// const counter1 = getEncounter();
// const counter2 = getEncounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());


// const spl = "js".split(",");
// console.log(spl);


// const mko  =  ["j","s"];
// console.log(spl === mko);
// // const spl = "js".split(",");
// // "js".split(",") splits the string "js" at commas (",").
// // Since there is no comma in "js", it doesn't split, and spl becomes:
// // js
// // Copy
// // Edit
// // ["js"]

// var ppp = 10;

// if(true){

//   console.log(ppp);




// }
// console.log(ppp);
// // swap two variable without using   third  variable

// // let iop = 20;
// // let poi = 565;

// // iop = poi;
// // poi = iop + poi;
// // console.log(iop, poi);


// understanding of scope in js
// function testScope() {
//     var a = 10;
//     if (true) {
//         var a = 20;  
//         console.log(a); 
//     }
//     console.log(a);
// }

// testScope();
// //understanding that
// function testScope() {
//     var a = 10;  // (1) 'a' is declared and initialized with 10

//     if (true) {
//         var a = 20;  // (2) This 'a' is NOT a new variable; it overwrites the previous 'a'
//         console.log(a);  // (3) Prints 20
//     }

//     console.log(a);  // (4) Still prints 20 (not 10)
// }

// testScope();
// var is function-scoped, NOT block-scoped.
// When you declare var a = 20; inside the if block, it does not create a new variable.
// Instead, it overwrites the existing a declared earlier in the function.


// function blockScopeTest() {
//     let x = 10;
//     if (true) {
//         let x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }

// blockScopeTest();


// function blockScopeTest() {
//     let x = 10;  // (1) 'x' is declared in function scope and initialized with 10

//     if (true) {
//         let x = 20;  // (2) A NEW 'x' is declared inside the block (not the same as step 1)
//         console.log(x);  // (3) Prints 20 (this is the block-scoped 'x')
//     }

//     console.log(x);  // (4) Prints 10 (this refers to the 'x' outside the block)
// }

// blockScopeTest();

// var globalVar = "I am global";

// function checkScope() {
//     var localVar = "I am local";
//     // var globalVar = "I am globalscope";
//     console.log(globalVar);
//     console.log(localVar);
// }

// checkScope();
// console.log(localVar); // What happens here?
// const myConst = 10;
// myConst = 20; // Can this be reassigned?
// console.log(myConst);


// hello();
// function hello() {
//     console.log("Hello, World!");
// }// function declarion

// greet();
// var greet = function() {
//     console.log("Good Morning!");
// };
// This part, however, will throw an error.
//  Here’s why: greet is defined using a function
//  \ expression (assigned to a variable with var).
//  Unlike function declarations, function




for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 3000)

}

// let j = 0; → A new j is created for this iteration, setTimeout schedules console.log(j) for 1000ms.
// let j = 1; → Another new j is created, setTimeout schedules console.log(j).
// let j = 2; → Another new j is created, setTimeout schedules console.log(j).
// Loop exits, and j is gone.
// 💡 Key behavior:

// let is block-scoped, meaning each iteration gets a new, independent j.
// By the time setTimeout executes, the correct j from that iteration is still available in memory.


// (function() {
//     var secret = "I am hidden";
//     console.log(secret);
// })();
// console.log(secret); // What happens here?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
//     Loop Execution (Synchronously)

// i = 0 → setTimeout() schedules console.log(i) (executes after 1000ms).
// i = 1 → setTimeout() schedules console.log(i) (executes after 1000ms).
// i = 2 → setTimeout() schedules console.log(i) (executes after 1000ms).
// i = 3 → Loop condition (i < 3) is now false, so the loop stops.
// 🚀 At this point, the loop has completed execution, and i is now 3.
}
// Step-by-step execution:
// var i = 0; → setTimeout schedules console.log(i) to run after 1000ms.
// var i = 1; → Another setTimeout is scheduled.
// var i = 2; → Another setTimeout is scheduled.
// Loop exits, and i becomes 3.
// 💡 Key behavior:

// var is function-scoped (not block-scoped), meaning all iterations share the same i variable.
// When the setTimeout executes after 1000ms, the loop has already completed, and i is 3.
// Therefore, all three console.log(i) calls print 3:

// Why does var overwrite the previous value?
// var is function-scoped, not block-scoped, meaning that every iteration of the loop does not create a new i variable.
// Instead, the same i variable is updated on each iteration.
// By the time the setTimeout callback runs (after 1000ms), the loop has already completed, and i has been updated to 3.


console.log("2" + 3 * 2);
// Multiplication first:
// According to operator precedence, 
// * (multiplication) has a higher precedence than + 
// (string concatenation).
// So, 3 * 2 is evaluated first:

// Operator	Description	Precedence	Associativity
// ()	Parentheses (Grouping)	Highest	Left-to-right
// **	Exponentiation	15	Right-to-left
// *, /, %	Multiplication, Division, Modulus	14	Left-to-right
// +, -	Addition, Subtraction	13	Left-to-right
console.log(("2" + 3) * 2);

console.log(5 + 2 * 3);  // 11 (Multiplication first)
console.log((5 + 2) * 3); // 21 (Parentheses first)


// Exponentiation ** (Right-to-left)
console.log(2 ** 3 ** 2); // 512 (evaluates as 2 ** (3 ** 2));
// Evaluate the rightmost part first: 3 ** 2 means 3 squared.
// 3² = 9.
// Now substitute that back into the expression: It becomes 2 ** 9.
// 2⁹ = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 512.

// Multiplication, Division, Modulus *, /, % (Left-to-right)

console.log(10 / 2 * 5); // 25 (Left-to-right)
console.log(10 % 3 * 2); // 2 (Modulus first, then multiplication)

// Addition and Subtraction +, - (Left-to-right)

// js
// Copy
// Edit
console.log(5 - 2 + 3); // 6 (Left-to-right)

let arr = ["baby", "i", "love", "u"];
let str = arr[0] + arr[2] + arr[3];
console.log(str);

function add(a, b, c) {
    return a + b + c
}
console.log(add(2, 3));
// The function add(a, b, c) expects three parameters (a, b, and c).
// However, when calling the function, you are passing only two arguments (2 and 3).
// Since the third parameter (c) is missing, it will be undefined.

// Behavior in JavaScript:
// When performing a + b + c:

// a = 2
// b = 3
// c = undefined
// Since undefined is involved in an 
// arithmetic operation (+), 
// JavaScript treats it as NaN (Not a Number).
// let a = 1;
// let b = 2;
// let c;
// console.log(a + c+b);// nan


function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }


    let freq = nums.filter(n => n === candidate).length;
    return freq > nums.length / 2 ? candidate : -1;
}

console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3, 1, 2]));


var name1 = "nitin";
var name2 = "";
for (let i = name1.length - 1; i >= 0; i--) {

    name2 += name1[i]


}
if (name1 === name2) {
    console.log("its palindrom");

} else {
    console.log("its not");

}


// function factorial(item){
//   debugger
//    if(item === 0){
//     return 1
//    }

//    return item*factorial(item-1)

// }
// let value = 5;
// console.warn(factorial(value));

let factrial = (item) => {

    if (item === 0) {
        return 1
    }
    return item * factrial(item - 1)

}
console.log(factrial(5));


// function FindLargestWord(sentence){
//     let currentWord = '';
//     let lastword = '';

//     for(let i = 0; i < sentence.length; i++){

//       const char = sentence[i];

//       if(char === ' ' || i === sentence.length){

//          if(currentWord.length > lastword.length){
//               lastword = currentWord
//          }
//          currentWord = ""

//       }else{
//          currentWord += char
//       }

//     }

//     return lastword
// }


function FindLargestWord(str) {
    str += " ";
    let currernWord = "";
    let lastsword = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === " ") {
            if (currernWord.length > lastsword.length) {
                lastsword = currernWord
            }
            currernWord = "";
        } else {
            currernWord += char
        }
    }
    return lastsword
}
console.log(FindLargestWord("learn  from thapa technical"));

function findlargest(char){
  
 var words = char.split(" ");
 var newWord = words.sort((a,b)=> b.length - a.length)

return newWord[0]
  

}
console.log(findlargest("learn javascript from thapa technical"));

// function secondLargestSort(arr) {
    
//     let uniqueArr = [...new Set(arr)];
//     if(uniqueArr < 2)  return "no second largest number";

//     uniqueArr.sort((a,b)=> b - a);
//     return uniqueArr[1]


// }
// console.log(secondLargestSort([12,5,65,4,85,1]));




function findSecondLargest(arr){
  
  let num = [...new Set(arr)];
   if(num < 2)  return "no second largest number";
  num.sort((a,b)=> b - a)
  return num[1]




}
console.log(findSecondLargest([12,5,7,6,45]));


const mySet = new Set([12,5,7,6,45]);
mySet.add(1);
mySet.add(2);
mySet.add('text');
mySet.add(1);
console.log(mySet);
console.log(typeof mySet);

console.log(mySet.has(1));
console.log(mySet.has(56));
console.log(mySet.delete(1));
console.log(mySet);

console.log(mySet.delete(1));
// console.log(mySet.clear());
console.log(mySet);

console.log('10' > 9);
// JavaScript uses type coercion in 
// comparison operations.
// The > operator attempts to convert 
// the string '10' into a number.
// '10' is converted to 10 (a number).

var collectArray = [
    { id: 101, customer: "Alice0", total: 250, status: "completed" },
    { id: 102, customer: "Bob1", total: 175, status: "pending" },
    { id: 103, customer: "Charlie2", total: 300, status: "completed" },
    { id: 104, customer: "Dana3", total: 120, status: "cancelled" },
    { id: 105, customer: "Eve4", total: 450, status: "pending" }
];

// const groupedByStatus = collectArray.reduce((acc,order) =>{
    
//     const status = order.status;
//     if(!acc[status]){
//        acc[status] = []
//     }
//     acc[status].push(order);
//     return acc;

// },{});
// console.log(groupedByStatus);


// const groupedByStatus = {};


//  collectArray.forEach((item)=>{
//        const status = item.status;

//        if(!groupedByStatus[status]){
//         groupedByStatus[status]  = []
//        }
//        groupedByStatus[status].push(item)
       
       


// })

// console.log(groupedByStatus);



// for(const order of collectArray){
     
//     const status = order.status;
//     if(!groupedByStatus[status]){
//         groupedByStatus[status] = []
//     }
//     groupedByStatus[status].push(order)
   

// }
// console.log(groupedByStatus);


for(const val of [1, 2, 3, 4, 5]){
    console.log(val);
    
}

// genrator function

function makeIterator(start = 0, end = Infinity, step = 1){
      
    let nextStart = start;
    let iterationCount = 0;

    return {
     
        next(){
           let result;
           if(iterationCount < end){
              result = { value:nextStart, done:false}
              nextStart = nextStart + step;
              iterationCount++;
              return result
           }
                return {value : iterationCount, done:true}
        }

    }
}

const myIterator = makeIterator(10, 20,2);
let result = myIterator.next()

while(!result.done){
console.log(result.value);
result = myIterator.next()

}


// Data Properties

// Store and return values.
// Have attributes like value, writable, 
// enumerable,
//  and configurable.
// Accessor Properties

// Use getter (get) and setter (set) functions instead of directly storing a value.
// Allow controlled access to properties.


let john = {
    names : "John",
    birthyear : 1998,
    Anualsalary : 120000,
   
  get  getName(){
    return `${this.names}`
   },

   set setName(val){
     return this.names = val
   }

}

console.log(john.getName);
john.setName = "John Smith";
console.log(john.getName);

// console.time;
//The console.time() and console.timeEnd() methods 
// are used to measure the execution 
// time of a block of code.

// 1. console.time(label)
// Starts a timer with a given label.
// The label is a string that identifies the timer.
// 2. console.timeEnd(label)
// Stops the timer with the same label 
// and prints the time elapsed in milliseconds (ms).
// console.time("test")
console.time("test")
for(let i = 0; i < 100000000; i++){
   
}
console.timeEnd("test")

let arroy = new Array(3);
 arroy.pu
arroy[0] = 10;

console.log(arroy);
 

const foo = null ?? 'default string';
console.log(foo);


let users = {
    students :{
        name : '',
        age : 25
    }
}
console.warn(users.students.name ?? 'unknown');

console.log([] == 0);


// [] == 0
// JavaScript tries to convert [] (an empty array) 
// to a primitive value before comparison.
// An empty array is converted to
//  an empty string "" when coerced to a primitive.
// Now, the comparison becomes:
// javascript
// Copy
// Edit
// "" == 0
// The empty string "" is then converted to the number 0.
console.log([0]== [0]);

// This happens because arrays are reference types in JavaScript. Let's break it down:

// Array Comparison in JavaScript

// In JavaScript, when comparing objects (including arrays) using ==, it checks if both operands refer to the same memory location, not if their contents are the same.
// Step-by-Step Evaluation

// [0] == [0]
// Both [0] and [0] are separate array instances stored at different memory locations.
// Since they are different objects in memory, the comparison returns false.
// Example for Better Understanding
// javascript
// Copy
// Edit
// let a = [0];
// let b = [0];

// console.log(a == b);  // false (Different memory references)

// let c = a;
// console.log(a == c);  // true (Same memory reference);
console.log({a:0} == {a:0});
// In JavaScript, objects (including arrays) are reference types.
// When comparing objects using ==, JavaScript checks if both operands refer to 
// the same memory location, not if their contents are the same.
// In this case, {a: 0} and {a: 0} are two different objects in memory.
let a = 5;
let b = a;
a = 10;
console.log(b);

var abhi = 5;
var bhi= abhi;
abhi = 10;
console.log(abhi);


if({}){
    console.log(true);
    
}else{
    console.log(false);
    
}
// In JavaScript, 
// an empty object ({}) is a truthy value.
// The if condition checks whether 
// the expression inside it evaluates to a truthy or falsy value.
// Since {} is truthy, the if block executes, printing true.

// Everything else (including empty objects {} 
// and empty arrays []) is truthy.

const adding = (a, b) => a + b;
console.log(adding(6,2));

console.log([] == []);
// there is also same reason of false becasue memory location different
console.log(+true);
console.log(+false);


let obj = {
    names : "Anil",
    true : "This is boolean key"
}

let data = new Map([
    ['name','Peter'],
    [true,'this is number key in map']
])
console.log(obj);
console.log(data.keys());

var obj_1 = {prop : 60};
var obj_2 = obj_1;
obj_2 = {};
console.log(obj_1);


var charector;
var charector = "js";
var OBJ3 = charector;
charector2 = "Learn";
console.log(charector);
console.log({} == {});

function sum(a=5,b=4){
console.log(a+b);

}
sum(null,2)

// a defaults to 5
// b defaults to 4
// When calling sum(null, 2), the arguments passed are:

// a = null
// b = 2
// How Default Parameters Work:

// Default parameters only apply if an argument is undefined.
// Since a is explicitly passed as null, the default value (5) is NOT used.
// null is treated as 0 in numeric operations (null + 2 = 0 + 2 = 2).

// let ujn = 10;
// let bnb = ujn++;
// let mvm = ujn + bnb;
// console.log(mvm);

// console.log(NaN == NaN);

// console.log(NaN === NaN);
// let answer = Number(prompt("What is your age"))
// if(isNaN(answer)){
//   console.log("Wrong input");
  
// }
// else if(answer >= 18){
//    console.warn("Eligibel for vote");
   
// }
// else{
//    console.warn("not Eligibel");
   
// }


// let randomNumbers = Array.from({length : 100} ,()=> Math.floor(Math.random()*100));

// console.log(randomNumbers);
// var a1 = Array.from("Hellow word");
// document.writeln(a1)

// let array = [1, 2, 3];
// let objectsed = {x:1, y:2, z:3}
// console.log(...array,...objectsed); type error is show

// const user = { id: 101, username: "Alice" };
// const{id : uerid, username : firstname } = user;
// console.log(uerid);
// console.log(firstname);


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
// arr2[0] = 100;
// console.log(arr2);

// console.log(arr1);
// var x = [0];
// var y = x;
// y[0] = 10;
// console.log(x);

// const x = NaN;
// const y = NaN;

// console.log(isNaN(x) == y);
// console.log(x == y);

// console.log([] == 0);
// console.log([0] == [0]);


// var x =10;

// if( x > 4){
//   let x = 20;
//   console.log(x);
  
// }
// console.log(x);


// const number = [1, 2, 3];
// number[10] = 11;
// console.log(number);

// console.log(number[5]);//it will show undefine

// let xyz = "serena";
// let abc = xyz.indexOf("sanvi");
// console.log(abc); it will  show -1

// const objct = {

//    if : 2,
//    then : (res)=>{
//     res(obj.if * 2)
//    }

// }
// const abc = await objct;
// console.log(abc);
console.log([] + []);
console.log({} + {});

const [mm,nn,ll] = [3,5];
console.log(mm,nn,ll);

let joj = { name : 'Dev'};
let non = joj;
joj = null;
console.log(non);


const akkary = [1, 2, 3];
akkary[10] = 10;
console.log(akkary);
console.log(akkary[6]);

const number = [1, 2, 3];
number [10] = 11;
console.log(number);
console.log(number[5]);


const isTrue = !0;
console.log(isTrue);
const alsoFalse = !!0;
console.log(alsoFalse);

const uniqueArray = [1, 1, 2, 3, 6, 6, 3, 1]
console.log([...new Set(uniqueArray)]);

const int = 19.8 | 0;
console.log(int);


let num = [1, 2, 3, 4];
num[num.length-1]++;
console.log(num);

let n = 1;
n = n++ + ++n+ n++;
console.log(n);

function getAge(...args){
    console.log(typeof args);
    
}
getAge(21)

// The function getAge is defined with a rest parameter (...args).

// The rest parameter (...args) gathers all arguments into an array.

// The function is called with getAge(21), so:

// ini
// Copy
// Edit

const object = {a : 1};
Object.freeze(object)
object.a = 2;
console.log(object);


const hhhh = [1, 2, 3];
arr[5] = 10;
console.log(arr);
console.log(arr.length);
console.log(arr[4])


// let arr = ["you", "are", "cute"];
// delete arr[0];
// console.log(arr)
// console.log(arr.length)
// actual output is 3 because delete operator create undefine hole not change the original length of array


let x = 4;
let y = 2;
let z = y * x;
let hj = z * y;
console.log(hj - x);
// [1] + []	"1"	[1] → "1", [] → "", concatenation → "1"
// [1,2] + []	"1,2"	[1,2] → "1,2", [] → "", concatenation → "1,2"
// [] + []	""	Both are empty arrays, so it results in an empty string
// [1] + [2]	"12"	[1] → "1", [2] → "2", concatenation → "12"
// 1 + [1]	"11"	1 + "1" results in "11"
// [1] + 1	"11"	[1] → "1", so "1" + 1 → "11"


// let marks = {
  
//     names : "marks",
//     lastname : "hanry",
   
//      jack : {
//        name : "jack",
//        lastname : "sparow"
//      }
   
   
   
//  }
 
 
//  let jacks = {marks};
//  jacks.names = "bubble";
//  console.log(marks)
//  console.log(jacks)
 
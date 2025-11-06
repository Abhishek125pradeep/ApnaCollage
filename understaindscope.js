

var x = 10;

function test(){
    
 
    
    if(x < 20){
       
       var x = 50;
        
    }
    
    console.log(x)
    
    
}
test()

// Perfect 👍 — this is the right way to understand it — through execution context and hoisting step by step.
// Let’s go deep into how the JavaScript engine actually runs your code internally.

// We’ll use your exact code: 👇

// 🧩 Code
// var x = 10;

// function test() {
//   if (x < 20) {
//     var x = 50;
//   }
//   console.log(x);
// }

// test();


// Step 1: Global Execution Context (GEC)

// Whenever your script starts, JS creates a Global Execution Context.

// This happens in two phases:

// 🔹 Phase 1: Memory Creation Phase (Hoisting phase)

// JavaScript scans your code and allocates memory for all variables and functions before executing anything.

// Variable / Function	Memory allocated	Initial Value
// x	undefined	(will be assigned later)
// test	function reference	(whole function code)

// ✅ So after this phase, in memory:

// x → undefined
// test → function(){}

// 🔹 Phase 2: Code Execution Phase

// Now JS runs your code line by line.

// 1️⃣ Executes:

// var x = 10;


// Now memory updates:

// x → 10


// 2️⃣ Function declaration function test() { ... } is already stored (nothing to do now).

// 3️⃣ Executes:

// test();


// ➡️ This creates a new Execution Context for the function test().
// Step 2: Function Execution Context (FEC) for test()

// When the function runs, JS again goes through two phases inside the function.

// 🔹 Phase 1: Memory Creation Phase (Hoisting inside function)

// JS scans the function code:

// if (x < 20) {
//   var x = 50;
// }
// console.log(x);


// It finds var x.

// So it creates a new variable x inside the function’s local memory, and sets it to undefined.

// Local variable	Initial Value
// x	undefined

// ⚠️ Important:
// Even though the var x is written inside the if block, var is function-scoped,
// so JS moves it to the top of the function context (this is hoisting).

// That means the function is treated like this internally:

// function test() {
//   var x;  // hoisted to top (undefined at first)

//   if (x < 20) {
//     x = 50;
//   }

//   console.log(x);
// }

// 🔹 Phase 2: Code Execution Phase (inside the function)

// Now JS executes line by line inside the function context.

// 1️⃣ It checks:

// if (x < 20)


// Here, local x is undefined.
// → So condition becomes undefined < 20, which is false.

// ✅ JS does NOT enter the if-block.

// 2️⃣ Next line:

// console.log(x);


// Local x is still undefined, so it prints:

// undefined

// ⚙️ Step 3: Function context destroyed

// After the function finishes, its local memory (x = undefined) is removed.
// The engine goes back to the global context.
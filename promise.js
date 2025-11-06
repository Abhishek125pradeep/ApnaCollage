



// const P =  new Promise((resolve,reject)=>{


    
//         reject("promise resolve")

   
   

// })



// const P2 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//           reject("promise2 resolve")

//     },3000)
 

// })


// const P3 =  new Promise((resolve,reject)=>{

//    resolve("promise3 resolve")

// })

// const p5 = [P,P3]

// Promise.all([P2,P3,P])
// .then((res)=>{
//     console.log(res);
    
// })

// Promise.allSettled([p5])
// .then((res) =>
//     res.forEach((itom)=>{
//         console.log(itom.status);
        
//     })
// )

// Promise.any(p5)
// .then((res)=>{
//     console.log(res);
    
// })


function memoize(fun) {
    debugger
  let cache = {};  // Step 1: store results

  return function (...args) {
    let n = args[0]; // Step 2: assume function has one main argument

    if (n in cache) {
      console.log("cache");
      return cache[n]; // Step 3: return stored result if available
    } else {
      console.log("calculating first time");
      let result = fun(n); // Step 4: call original function
      cache[n] = result;   // Step 5: store in cache
      return result;
    }
  };
}

// Example usage:
function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // calculating first time → 25
console.log(memoizedSquare(5)); // cache → 25
console.log(memoizedSquare(6)); // calculating first time → 36

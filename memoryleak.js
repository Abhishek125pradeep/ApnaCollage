

function getTime(){

  let timenow = new Date();
  console.log(timenow);
  


}
getTime()


function testFun(){

    console.log(timenow);
    

}

// ⚠️ Why this causes a memory leak

// When you create global variables unintentionally like this:

// The variable timenow stays in memory as long as the page is open.

// Even if the getTime() function finishes execution and is popped off the call stack,
// the timenow variable is not garbage-collected because it’s globally referenced (window.timenow).

// Every time you click the button or reassign it to a new Date(), you create a new object in memory — but the old one may remain referenced by closures or global scope.


// on every click new Date() object is created and stored in the same global variable.
// Even though timenow is overwritten, it prevents garbage collection optimizations because the global scope is always “alive”
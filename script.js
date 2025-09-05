
const username = prompt("Enter your name");
const userage = +(prompt(89))


if (userage >= 25) {
    debugger;
    document.writeln("My name is : " + `${username}` + '<br>')
    document.writeln("I am Working Professional")
} else {
    document.writeln("My name is : " + `${username}` + '<br>')
    document.writeln("I am Student")
}



function test(){
    
    function foo(){}
    
    var bar;
    foo();
    bar();
    function foo(){
        console.log("foo")
    }
    
    bar = function(){
        console.log("bar")
    }
    
}


test()




// function fibbonaci(n){
    
//     fib = [0,1]
    
//     for(let i = 2; i < n; i++){
        
//         fib[i] = fib[i -1] + fib[i -2];
        
//     }
    
//     return fib.slice(0,n)
    
    
// }

// console.time()
// console.log(fibbonaci(10))
// console.timeEnd()



function findMinMax(arr) {
    debugger;
    if (arr.length === 0) {
        return { min: null, max: null };
    }
    
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return { min, max };
}

// Example usage
const numbers = [5, 2, 9, 1, 7, 3];
const result = findMinMax(numbers);
console.log(`Smallest: ${result.min}, Largest: ${result.max}`);
// Output: Smallest: 1, Largest: 9
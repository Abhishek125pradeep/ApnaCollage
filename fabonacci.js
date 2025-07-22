
function fibonacciIterative(n) {
    debugger;
  let fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib.slice(0, n + 1);
}

console.log(fibonacciIterative(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



function Findseconlargest(arr){
  
    if(arr.length <= 2 ){
       
        return "array should be contain atleast 2 itoms"

    }

   let largest = arr[0];
   let secondLargest = null;

    for(let i = 0; i < arr.length ; i++){
         
        let current = arr[i];

        if(largest > secondLargest){

           secondLargest = largest;
           largest = current

        }


    }

}
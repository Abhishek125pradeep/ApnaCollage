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


let arr = [1, 2, 5, 8, 9, 10];
let missing = [];

let n = 10; // maximum number

for (let i = 1; i <= n; i++) {
  let found = false;
  
  // check if i exists in arr
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === i) {
      found = true;
      break;
    }
  }
  
  if (!found) {
    missing.push(i);
  }
}

console.log("Missing numbers:", missing);

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
console.log(sort(arr));


let User = {
    name: "abhishek",
    get: function () {
        setTimeout( ()=> {
            console.log(this);
        }, 0);
    }
}
User.get();


//  setTimeout( function() {
//             console.log(this);
//         }, 0);

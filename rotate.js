
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const rotateArr = arr.slice(4).concat(arr.slice(0,4))
// console.log(rotateArr);

// const rotationarr = [...arr.slice(4),...arr.slice(0,4)];
// console.log(rotationarr);



// const rotatedArr = arr.slice(3).concat(arr.slice(0, 3));
// console.log(rotatedArr); // [4, 5, 6, 7, 8, 1, 2, 3]

// let newArr = [1, 2, [3, 4, 5],6,7];
// let lastArr = newArr;
// console.log(lastArr);
// lastArr[1] = 99;
// console.log(lastArr);
// console.log(newArr);
// let spreadArr = [...lastArr];
// console.log(spreadArr);
// spreadArr[2] =100;
// console.log(spreadArr);
// console.log(newArr);



// let newArr = [1, 2, [3, 4, 5], 6,];

// copiedArr = newArr;
// copiedArr.push(7);
// console.log(copiedArr);
// console.log(newArr);


// deep copy
// let newArr = [1, 2, [3, 4, 5], 6,];

// copiedArr =JSON.parse(JSON.stringify(newArr)) ;
// copiedArr[2].push(7);
// console.log(copiedArr);
// console.log(newArr);

// for(let i = 1; i <= 3; i++){
//     setTimeout(()=>{
//     console.log(i);
    
//     },1000)
// }


var Obj = {
    firstname : "Abhishek",
    lastname : "Nagrale",
    Age : 25,
    email : "abhishek333roy@gmail.com"
}

for(var key in Obj){
console.log(`${key}   : ${Obj[key]}`);

}

function findfrequency(Alpha){
    
    frequency = {};
    
    for(char of Alpha){
        if(frequency[char]){
            frequency[char] += 1;
        }else{
            frequency[char] = 1;
        }
    }
    
    return frequency
}
console.log(findfrequency("mississipuim"))

const array = [1, 2, 2, 3, 4, 4, 5];

const uniquearray = []
array.forEach((itom)=>{
     
     if(!uniquearray.includes(itom)){
         uniquearray.push(itom)
     }
    return uniquearray
})

console.log(uniquearray)




function findMissingNumber(arr) {
  const n = arr.length + 1; // Because one number is missing
  const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to N
  
  const arrSum = arr.reduce((acc, val) => acc + val, 0); // Sum of elements in array
  
  return totalSum - arrSum; // The difference is the missing number
}

const array7 = [1, 2, 4, 5, 6];
console.log(findMissingNumber(array7)); // Output: 3


function findMissingNumbers(arr, maxNum) {
    const missing = [];
    for (let i = 1; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

const numbers = [1, 2, 3, 5];
console.log(findMissingNumbers(numbers, 10)); // Output: [4, 6, 7, 8, 9, 10]

console.log(this)

 let User = {
    
    name : "Abhishek",
     
    
    getname : function(){
        console.log(this.name)
        
    }
}  


User.getname();


const fn = User.getname;
fn();



const user = {
  name: "Abhishek",
  outerThis: this,  // evaluated in global scope
  show: function() {
    console.log("Method this:", this); // 'this' = user
    function inner() {
      console.log("Inner function this:", this); // global or undefined
    }
    inner();
  }
};

console.log("Object level this:", user.outerThis);
user.show();






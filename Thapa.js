

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

// console.log(FindLargestWord("learn from thapa technical"));



const findLongestWord = (str)=>{

   var words = str.split(" ");
   var newWords = words.sort((a,b)=>  a.length - b.length)
    
   return newWords.at(-1)
   
   

}

console.log(findLongestWord("learn  Form thapa "));



// function FindMissingWord(num){
   
//    let count = 0;

//    for(let i =0; i < num.length; i++){
//        if(num[i].toUpperCase() === 'h'){
//            count++
//        }
//    }

//   return count
// }
// console.log(FindMissingWord("heellowhoware yoyr"));
  
const countChar = (word, char) =>{
    
   word = word.toLowerCase();
   char = char.toLowerCase();
   
   word.split("").reduce((acc,curr)=>{
         
       if(curr === char){
           acc++
       }
         return acc
   }) 
     
   

   

}
console.log(countChar("Mississipi","i"));


// const checkTriangleType = (a,b,c) =>{
//     if(a === b && b ===c)  return "equilateral";
//     if(a === b || b === c || a === c) return "isosceles";
//     return "scalene"
// }

// console.log(checkTriangleType(3, 3, 5));
// console.log(checkTriangleType(3, 4, 3));
// console.log(checkTriangleType(5, 8, 6));


function sortArrayAccendingOrder(arr){
    
   return arr.sort()


}
console.log(sortArrayAccendingOrder([2,5,3,1,4,0]));


let arr = [1,2,3,4,5,6,7]

let sum = arr.reduce((accum, curr)=>{
   debugger
   return accum + curr
})

console.log(sum);


function removeDuplicates(arr){
     let uniqueNumber = {};
     let result = [];

     for(let i = 0; i < arr.length; i++){
      let num = arr[i];

      if(!uniqueNumber[num]){
       uniqueNumber[num] = true;
       result.push(num)
      }
     }
     return result;

}

let number = [1, 2, 2, 3, 4, 5, 5, 7, 6,6];
console.log(removeDuplicates(number));




function DIffer(arr){
   let alpha = [];
   let num = [];
   
   for(let i = 0; i < arr.length; i++){
       const char = arr[i];
       
       if(typeof char=== 'number'){
            
            num.push(char)
           
       }else{
           alpha.push(char)
       }
   }
   
   return {numbers: num, alphabets: alpha}
}

console.log(DIffer([1, "appkle", 2, "bnana", 3, "orange", 4]))


for (let i = 500; i >= 200; i -= 50) {
   console.log(i);
}

function DIffer(arr){
   let alpha = [];
   let num = [];
   
   for(let i = 0; i < arr.length; i++){
       const char = arr[i];
       
       if(typeof char=== 'number'){
            
            num.push(char)
           
       }else{
           alpha.push(char)
       }
   }
   
   return {numbers: num, alphabets: alpha}
}

console.log(DIffer([1, "appkle", 2, "bnana", 3, "orange", 4]))


for (let i = 500; i >= 200; i -= 50) {
   console.log(i);
}
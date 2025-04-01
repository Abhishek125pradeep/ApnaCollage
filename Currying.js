
// function currying(a){

//     return  function (b){

//       return function  (c){
          
//             return a + b +c

//         }

       

//      }
     
// }
// console.log(currying(1)(15)(15));


// function evaluate(operation){
   
//   return function(a){


//     return function(b){
     
//       if(operation === "sum")   return a + b;
//       else if(operation === "mul") return a * b;
//       else if(operation === "sub") return a - b;
//       else if(operation === "div") return a / b;
//       else return "Invalid  credential"

      


//     }
  
    

//   }


// };

// document.write(evaluate("mul")(15)(12),'<br>')

// document.write(evaluate("sum")(15)(12))







// function Currymultiply(x){

//   return function(y){
//       if(y) return Currymultiply(x * y)
//   }


// }
// Currymultiply(15)(5)(2);



function sum(a){
  
    return function(b){
      
      if(b)  return a + b;
      return (a)
     
    }

}

document.write(sum(12)(), '<br>')
document.write(sum(12)(12))

var arr =[1, 2, 3,,,];

var newArr = arr.map((itom)=> itom * 2);
console.log(newArr);

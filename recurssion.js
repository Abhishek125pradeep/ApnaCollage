


// function goTOLunch(x){
   
//     console.warn(x);
//     if(x < 10){
//         goTOLunch(x+1)
//     }
    
  
   
// }
// let data = 0;
// goTOLunch(data);

// function factorial(item){
//   debugger
//    if(item === 0){
//     return 1
//    }
  
//    return item*factorial(item-1)

// }
// let value = 5;
// console.warn(factorial(value));


// var Marvel = ["Ironman","Capton-America","Black Panther","Ant-Man","Black-Widow"]
// var Hero = []
// for(var i = 0; i < Marvel.length; i++){
//       Hero.push(Marvel[i]);
//      console.log(i);
     
     
// }
// console.log(i);
// console.log(Hero);
 
// var names = "Abhishek";

// (function testVarScope(){
//     console.log(names);
    
//     if(true){
//      var x = 10;
//      console.log(names);

//     }
//     console.log(x);
    
// })()


// function testLetScope(){

//     if(true){
//     let y = 20
//     }
//     console.log(y);
// }
// testLetScope()

// function example(){
//     for(var i = 0; i < 3; i++){
//             console.log("inside loop",i);
            
//     }
//     console.log("outside loop",i);
// }
// console.log("outside loop",i);
// example();




// var Values = new Set(["mango","mango",1,2,1,2,true,false,true]);
// console.warn(Values);
// var newObject = Object.create(Values);
// var newObject = Array.from(Values)
// console.log(newObject);

// console.log(typeof Values);


// var nameArray = Array.from("Welcome to the jungle");
// console.log(nameArray);


// var nameArray = ["Rana", "Pratap", "Sig=ngh"];
// var arr = nameArray.fill("Tutorial00",1);
// console.log(arr);


function call(x){
  
    console.warn(x);
    
    if(x < 10){
     
   call(x+1)

    }
}
call(0)

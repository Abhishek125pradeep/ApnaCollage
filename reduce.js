var arr = [1, 2, 3, 4, 5, 6];
 var newArray = arr.reduce((acc,next)=>{
   
    
    
    return acc += acc + next
});

console.log(newArray);

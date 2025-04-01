

// const P1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     resolve("Promise 1is resolve")
//     console.log("P1m is resolve");
//    },3000)
   
     
// });

// const P2 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         reject("Promise2 is reject")
//         console.log("P2m is resolve");
//        },2000)
// });

// const P3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise3 is resolve")
//         console.log("P3m is resolve");
//        },1000)
// });


// var ResolvePromise = Promise.any([P2,P3,P1]);
// ResolvePromise.then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })



async function asynfunc(){
  
    return "Hellow word"
    

}
asynfunc()
.then((res)=>{
    console.log(res);
    
})
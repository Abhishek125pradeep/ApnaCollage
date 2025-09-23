



const P =  new Promise((resolve,reject)=>{


    
        reject("promise resolve")

   
   

})



// const P2 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//           reject("promise2 resolve")

//     },3000)
 

// })


const P3 =  new Promise((resolve,reject)=>{

   resolve("promise3 resolve")

})

const p5 = [P,P3]

// Promise.all([P2,P3,P])
// .then((res)=>{
//     console.log(res);
    
// })

// Promise.allSettled([p5])
// .then((res) =>
//     res.forEach((itom)=>{
//         console.log(itom.status);
        
//     })
// )

Promise.any(p5)
.then((res)=>{
    console.log(res);
    
})
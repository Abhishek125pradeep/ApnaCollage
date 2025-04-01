// var P1 = new Promise((resolve,reject)=>{
     
//     console.log("Resolve P1");
//     resolve("Promise P1 resovlving")
    
    

// })


// var P2 = new Promise((resolve,reject)=>{
//     console.log("Resolve P2");
//     resolve("Promiose P2 is resolving")
     
// })

// var P3 = new Promise((resolve,reject)=>{
//     console.log("Resolve P3");
//     reject("Promiose P3 ois rejected")
// })


// var result = Promise.allSettled([P1,P2,P3]);

// result.then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })


// function getdata(dataid,NextValueData){
    
//     setTimeout(()=>{
//         console.log("dataid", dataid);
    
//         if(NextValueData){
//          return NextValueData()
//         }
        
//     },2000)

    

// }

// getdata(1,
//     getdata(2, ()=>{
//         getdata(3, ()=>{
//             getdata(4, ()=>{
//                 getdata(5,()=>{

//                 })
//             })
//         })
//     })
// )

function getValue(dataId,NextValueData){
    
     return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          console.log(`${dataId} Promise is resolved`);
          resolve("Promise resolved successfully");
          if(NextValueData){
             return NextValueData()
          }

        },2000)
     })
   
     
     


}

// getValue(1).then(()=>getValue(2))
//  .then(()=> getValue(3))  
//  .then(()=> getValue(4))
//  .then(()=> getValue(5))

// (async function Handlingresult(){
   
//   await getValue(1);
//   await getValue(2);
//   await getValue(3);
//   await getValue(4)



// })()


var array = ["SHahrukh",45,["heor",66]];
console.log(array[2][0]);

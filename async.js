


let p = new Promise((resolve,reject)=>{
  
    setTimeout(()=>{
          resolve("Promise resolve");

    },5000)
  


})

async function valueable() {

   let val =  await p
   console.log(val);
   
   return "hellow word"
    
}

 let data = valueable();

valueable()
.then((res)=>{
    console.log(res);
    
}) 
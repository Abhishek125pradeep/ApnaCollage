
// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     title : "Hellow word",
//     body : "this is a test post",
//     userId : 1 // HTTP Response Body
// })
// .then(response => console.log(response.data))
// .catch(err => console.log(err))



// fetch('https://catfact.ninja/fact')
// .then((res)=> res.json())
// .then((data)=> console.log(data)
// )
// .catch((err)=>console.log(err)
// )


async function getCatFact(){

   try{
    let response = await fetch("https://catfact.ninja/fact");
    console.log(response);
    
    let data = await response.json();
    console.log(data);
    
   }catch (error){
    console.log(error);
    
   }

}
getCatFact();


  
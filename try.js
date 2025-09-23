
// try{
//     let result = 10
//     console.log(result);
//     let x = y + 10;
    
// }catch(error){
//     console.log("an error occured", error.message);
    
// }

try{

    console.log(z);

}
catch(err){
let z = 90;
console.log(err.message);

}

const url = "https://catfact.ninja/facts?limit=10";
console.log(fetch(url));

async function para(){

  
    let value = await fetch(url)
       console.log(value);
    let data = await value.json();
    console.log(data.data);
    console.log(data.data[0]);
    
    const facts = data.data.map(item => item.fact);
    console.log("Facts List:", facts);
  
}
para()


  





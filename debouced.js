// let data = document.getElementById('myinput'); // Fixed typo: getElementById

// data.addEventListener('input', (e) => {
//     console.log("event", e.target.value);
// });



let data = document.getElementById('myinput');






const debounce = (fn,delay=1000) =>{


    let id;
    return (...args) =>{
        clearTimeout(id)
   
      id = setTimeout(()=>{
            fn(...args)
        },delay)

    }

}

const debounced = debounce(handler,1000);

data.addEventListener('input',debounced);

async function handler (e){

    const response = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`);

   const data = await response.json();
   console.log(data.products);
    
   console.log("event", e.target.value);
     
}
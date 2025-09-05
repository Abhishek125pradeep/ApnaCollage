


let person = new Object({

    "first name" : "Abhishek",
    lastname : "Nagrale",


});

console.log('lastname' in person);



console.log(person["first name"]);
console.log(person.lastname);
console.log('lastname' in person);


for(let key in person){

    console.log(`${key} : ${person[key]}`);
    

}


person.getDat = function() {
    console.log("hiiii");
    
}

console.log(person);

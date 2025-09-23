

let eployeeInfo = {

    firstname : "abhishek",
    lastname : "nagrale",
    age : 78,


}

console.log(eployeeInfo);

Object.seal(eployeeInfo);
delete eployeeInfo.age
eployeeInfo.addres = 'pune'
eployeeInfo.firstname = "akshay"
console.log(eployeeInfo);

// Object.freeze(eployeeInfo)

// eployeeInfo.firstname = "hritik";
// delete eployeeInfo.age
// console.log(eployeeInfo);
// eployeeInfo.address = "Mumbai";
// console.log(eployeeInfo);
// delete eployeeInfo.address;
// console.log(eployeeInfo);

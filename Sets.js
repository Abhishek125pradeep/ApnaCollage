


// let data = new Set([1, 2, 3, 4, 1, 2,3, 4]);
// console.log(data);
// let data2 = [1, 2, 3, 4, 1, 2,3, 4];
// console.log(data2);


// const mySet = new Set();

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(5);
// console.log(mySet.size);
// console.log(mySet.has(7));



var User = {
    Name : "Abhishek",
    Mid : "Pradeep",
    last : "Nagrale",
  
 
    
};

 function getFullName()  {
    return `${this.Name} ${this.Mid} ${this.last}`
 }
 console.log(getFullName.apply(User));
  var newUser = getFullName.bind(User) 
console.log(newUser());

//  console.log(getFullName.call(User));
 

var User2 = {
    Name :"Jayesh",
    Mid : "Harah",
    last : "Rokde,"
}
console.log(getFullName.call(User2));



var user
console.log(User.Name);
var User2 = Object.create(User);
console.log(User2);
console.log(User2.Name);
var neweUser =Object.keys(User);
var assign = Object.assign(User.lastname = "")
console.log(neweUser);




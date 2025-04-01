

// const colors = ['red','green','yellow',"pink","black","blue"];



// // var colors2 = colors[2];

// const [color1,b,c,d,,e] = colors;
// console.log(color1,b,d);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


const user = {
    name : 'Anurag',
    age : 25,
    address : {
      city :'Banglore',
      state : 'Karnataka'
    }
    
}

// const name = user.name;
// const address = user.address.city
// console.log(name);
// console.log(address);
// in javascript name is default variable and its value is empty string ""
// const {name,age,job} = user
// console.log(name,age);
// console.log(job);

const {name:username, age:userage} = user
console.log(username);
console.log(userage);

// const {address:{city}} = user;
// const {address:{state}} = user;
// console.log(city);
// console.log(state);
const {address:{city}, address:{state}} = user
console.log(city,state);

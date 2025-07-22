

function currying(a) {

    return function (b) {

        return function (c) {
            return a * b * c
        }

    }

}
console.log(currying(3)(5)(6));



function test() {
  

     person = "Abhishejk"
}

test();

console.log(person);


let a = 10;
let b = 20;

console.log("sum of 10 and 20 is" + (a+b));

var person = {
    Fname : "abhishek",
    age :25,
    // get getFullName(){
    //     return `${this.Fname.toUpperCase()}`
    // },

    set setName(n){
       this.Fname = n.toUpperCase()
    }
}
person.setName = "ajit"
console.log(person);



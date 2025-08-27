

let emp = {

    firstName : "Abhishek",
    lastName : "Pradeep",
    age : 55,

    get add(){
        return this.firstName
    },
    
    set Setname(val){
       this.firstName = val;
    }


}

console.log(emp.add);
emp.Setname = "kajal";
console.log(emp.add);





let john = {
  
    name : "John",
    birthyear : "12-05-1998",
    AnnualSalary : 1200000,

    get getName(){
        return `${this.name} ${this.birthyear}`
    },

    set setName(val){
     this.name = val;
    }


}
console.log(john.getName);
john.setName = "John Smith";
console.log(john.getName);




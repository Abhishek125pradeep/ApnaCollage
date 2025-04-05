let john = {
    names : 'John',
    birthYear : 1998,
    Annualsallary : 12000,

   get getName(){
     return this.names
    },
   
    set setName(val){
       this.names = val;
    }
    
}

console.log("name", john.getName);
john.setName = "john smith";
console.log(john.getName);
john.setName = "Abhishek";
console.log(john.getName);





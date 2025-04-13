// let john = {
//     names : 'John',
//     birthYear : 1998,
//     Annualsallary : 12000,

//    get getName(){
//      return this.names
//     },
   
//     set setName(val){
//        this.names = val;
//     }
    
// }

// console.log("name", john.getName);
// john.setName = "john smith";
// console.log(john.getName);
// john.setName = "Abhishek";
// console.log(john.getName);


var john = {
  names : 'john',
  age : 28,
  job : 'teacher',

  greeting: function(style, timeofDay){
    switch(style){
       case 'formal':
        console.log('Good ', timeofDay, " ladies and gentleman.my name is " + this.names );
        break;

        case 'friendly':
         console.log("Hey there! my name is "+this.names+ " and i am "+ this.age+ 'year old '+ this.job+' Have a nice day')
         break;
         
        
    }
  }
}

john.greeting("friendly","morning")

var mark = {
  names : 'mark',
  age : 66,
  job : 'enginner',
}
john.greeting.call(mark, 'formal', 'afternoon' )

var shan = {
  names : 'Shan',
  age : 76,
  job : 'Farmer',
}

john.greeting.apply(shan,['friendly','evening'])

 var Anthony = {
  names : 'Anthony',
  age : 64.,
  job : 'bodyguard',
 }

 var stored = john.greeting.bind(Anthony, "formal","afternoon");
 stored()
 
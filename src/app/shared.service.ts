import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})

export class SharedService{
  
     employees = [
    { id: 1, firstname: 'John', lastname: 'Doe', location: 'Pune', role: 'Developer' },
    { id: 2, firstname: 'Jane', lastname: 'Smith', location: 'Mumbai', role: 'Designer' },
    { id: 3, firstname: 'Raj', lastname: 'Kumar', location: 'Delhi', role: 'Manager' }
  ];



//   get(id : number){
//     return  this.employees.find(emp => emp.id === id)
//   }



}
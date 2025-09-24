import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewencapsulattion',
  standalone: true,
  imports: [],
  templateUrl: './viewencapsulattion.component.html',
  styleUrl: './viewencapsulattion.component.css'
})
export class ViewencapsulattionComponent  implements OnInit{
 
 
  
  userList:any[]=[];

  http = inject(HttpClient);
  subscription! : Subscription

   ngOnInit(): void {

  
   
  }

  getUser(){

   this.subscription = this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
      window.alert(JSON.stringify(this.userList))
    })
  

   
  }

 


}

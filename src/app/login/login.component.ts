import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  

  constructor(private auth: AuthService, private router: Router) {
     
    const myObservable = new Observable(obser =>{
      obser.next("hellow" + Math.random());
     
    });
    
    myObservable.subscribe(res =>{
      console.log(res);
       
      
    })
     myObservable.subscribe(res =>{
      console.log(res);
       
      
    })
     myObservable.subscribe(res =>{
      console.log(res);
       
      
    });



    


  


  }



  ngOnInit(): void {
    const subject = new Subject<number>();

    subject.subscribe(val => console.log('subscriber 1', val)
    )
    
    subject.subscribe(val => console.log('subscriber 2',val)
    )

    subject.next(Math.random())

    

   


  }


  

  
}

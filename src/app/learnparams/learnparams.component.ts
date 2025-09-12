import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-learnparams',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './learnparams.component.html',
  styleUrl: './learnparams.component.css'
})
export class LearnparamsComponent {
   userId: number | null = null;   // keep just the id
   employee: any;

  constructor(private activatedroute : ActivatedRoute,private sharedservice :SharedService) {

   


  }

  ngOnInit(): void {
    
   this.userId = +this.activatedroute.paramMap.subscribe(params =>{
    const id = Number(params.get('id'))
       this.employee =  this.sharedservice.employees.find(emp => emp.id  === id)!;
   })

    
   

  }


}

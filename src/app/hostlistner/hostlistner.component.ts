import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlightdirective';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hostlistner',
  standalone: true,
  imports: [HighlightDirective, CommonModule],
  templateUrl: './hostlistner.component.html',
  styleUrl: './hostlistner.component.css'
})
export class HostlistnerComponent implements OnInit{
 
  

   ngOnInit(): void {

   
    
  }

 
  

}

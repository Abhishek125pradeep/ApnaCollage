import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

   toggleOn = false; // Controls the ng-template rendering
  

   onClick(){

    this.toggleOn = !this.toggleOn;

   }
}

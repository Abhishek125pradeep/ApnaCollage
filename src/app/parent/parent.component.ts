import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
   @ViewChild('usernameInput', { static: false }) 
  usernameInputRef!: ElementRef<HTMLInputElement>;

  massage : string = "Massage from Parent"
   ngAfterViewInit() {
    // ElementRef has a .nativeElement property which is the actual DOM object
    this.usernameInputRef.nativeElement.focus(); // Automatically focus the input on page load
    console.log('Input value on init:', this.usernameInputRef.nativeElement.value);
  }


  clearInput() {
    this.usernameInputRef.nativeElement.value = '';
    this.usernameInputRef.nativeElement.focus();
  }
}

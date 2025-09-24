import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostclick',
  standalone: true,
  imports: [],
  templateUrl: './hostclick.component.html',
  styleUrl: './hostclick.component.css'
})
export class HostclickComponent {

  @HostBinding('class.hovered') isHovered = true;
  @HostListener('click')myCLick(){
    console.log("element click");
    
  }

    


}

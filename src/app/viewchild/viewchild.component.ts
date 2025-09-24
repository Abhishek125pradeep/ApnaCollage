import { Component, ElementRef, QueryList, ViewChild, viewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
  
  @ViewChildren('ref')childref! : QueryList <ElementRef>;
   
  changedAll(){

    this.childref.forEach((p,i)=>{
      p.nativeElement.innerText = `Paragraph ${i+1} changed!`;
      p.nativeElement.style.color = 'yellow'
    })

    

  }


}

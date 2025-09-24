
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";


@Directive({
    selector : '[appHighlight]',
    standalone: true

})

export class HighlightDirective {

 @HostBinding('class.hovered') isHovered = true;
  @HostListener('click')myCLick(){
    console.log("element click");
    
  }


  
}
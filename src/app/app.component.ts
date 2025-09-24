import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LearnparamsComponent } from './learnparams/learnparams.component';
import { ParentComponent } from './parent/parent.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { ViewencapsulattionComponent } from './viewencapsulattion/viewencapsulattion.component';
import { HostlistnerComponent } from './hostlistner/hostlistner.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ChildComponent } from './child/child.component';
import { HostclickComponent } from './hostclick/hostclick.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,LearnparamsComponent,ParentComponent,
    NgtemplateComponent,ViewencapsulattionComponent
    ,HostlistnerComponent,ViewchildComponent,HostclickComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RouteParams';
  
  


}

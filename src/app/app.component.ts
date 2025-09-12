import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LearnparamsComponent } from './learnparams/learnparams.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,LearnparamsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RouteParams';
}

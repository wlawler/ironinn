import { Component } from '@angular/core';
import { Focus}  from './focus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ironinn';
  focuses = [
    new Focus(1, 'Gym'),
    new Focus(2, 'sleep'), 
    new Focus(3, 'Gains')


  ];
}

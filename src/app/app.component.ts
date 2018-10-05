import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public items = [
    { "title": "We are covered", "url": "images/covered.jpg" },
    { "title": "Generation Gap", "url": "images/generation.jpg" },
    { "title": "Potter Me", "url": "images/potter.jpg" },
    { "title": "Pre-School Kids", "url": "images/preschool.jpg" },
    { "title": "Young Peter Cech", "url": "images/soccer.jpg" } 
  ];

}

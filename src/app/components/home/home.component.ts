import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('imageAnimation', [
    ])
  ]
})
export class HomeComponent {
  
  imageState = 'zoom-out';

  startAnimation() {
    this.imageState = 'zoom-in';
  }

  resetAnimation() {
    this.imageState = 'zoom-out';
  }
}
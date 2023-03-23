import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  ngOnInit() {
    let imageUrl = "assets/alphabet/A.png"
    console.log(imageUrl, "image")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css'],
})
export class OcrComponent implements OnInit {
  public videoRef: any;
  public canvas: any;
  public captures: any;
  public image: any;

  ngOnInit(): void {
    this.videoRef = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
    this.setupCamera();
  }

  setupCamera() {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 640, height: 640 },
        audio: false,
      })
      .then((stream) => {
        this.videoRef.srcObject = stream;
      });
  }

  public capture() {
    this.canvas.getContext('2d').drawImage(this.videoRef, 0, 0, 640, 640);
    this.image = this.canvas.toDataURL('image/png');
    console.log(this.image);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrComponent } from 'src/app/components/ocr/ocr.component';



@NgModule({
  declarations: [OcrComponent],
  imports: [
    CommonModule
  ],
  exports:[OcrComponent]
})
export class OcrModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from 'src/app/components/sign/sign.component';



@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule
  ],
  exports:[SignComponent]
})
export class SignModule { }

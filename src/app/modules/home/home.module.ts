import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { OcrComponent } from 'src/app/components/ocr/ocr.component';
import { SignComponent } from 'src/app/components/sign/sign.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, OcrComponent, SignComponent],
  imports: [CommonModule, MatButtonModule, HomeRoutingModule],
  exports: [HomeComponent, SignComponent, OcrComponent],
})
export class HomeModule {}

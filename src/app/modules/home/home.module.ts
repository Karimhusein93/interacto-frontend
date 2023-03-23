import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatButtonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}

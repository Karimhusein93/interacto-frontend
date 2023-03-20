import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';


@NgModule({
  declarations: [FooterComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent,HeaderComponent]
})
export class SharedModule { }

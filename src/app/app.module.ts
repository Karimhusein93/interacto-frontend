import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { OcrComponent } from './components/ocr/ocr.component';
import { SignComponent } from './components/sign/sign.component';
import { HomeModule } from './modules/home/home.module';
import { OcrModule } from './modules/ocr/ocr.module';
import { SharedModule } from './modules/shared/shared.module';
import { SignModule } from './modules/sign/sign.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    OcrModule,
    SharedModule,
    SignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

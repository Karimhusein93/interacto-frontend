import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { OcrComponent } from 'src/app/components/ocr/ocr.component';
import { AboutUsComponent } from 'src/app/components/shared/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/shared/contact-us/contact-us.component';
import { SignComponent } from 'src/app/components/sign/sign.component';

const routes: Routes = [ 

  { path: '', component: HomeComponent },
  { path: 'sign-recognition', component: SignComponent},
  { path: 'ocr-bills', component: OcrComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

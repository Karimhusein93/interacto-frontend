import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { OcrComponent } from 'src/app/components/ocr/ocr.component';
import { SignComponent } from 'src/app/components/sign/sign.component';

const routes: Routes = [ 

  { path: '', component: HomeComponent },
  { path: 'sign-recognition', component: SignComponent},
  { path: 'ocr-bills', component: OcrComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

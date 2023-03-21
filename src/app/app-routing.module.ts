import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'interacto',
    loadChildren: () =>
      import('./modules/shared/shared.module').then((m)=>m.SharedModule),
  },
  {
    path: 'sign-recognition',
    loadChildren: () =>
      import('./modules/sign/sign.module').then((m)=>m.SignModule),
  },
  {
    path: 'ocr-bills',
    loadChildren: () =>
      import('./modules/ocr/ocr.module').then((m)=>m.OcrModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

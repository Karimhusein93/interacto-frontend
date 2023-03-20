import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule} from '@angular/material/icon'; 
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatListModule} from '@angular/material/list'
import { MatButtonModule} from '@angular/material/button';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    SharedRoutingModule
  ],
  exports:[FooterComponent,HeaderComponent]
})
export class SharedModule { }

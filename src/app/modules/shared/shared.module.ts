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
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms'; 
import { AboutUsComponent } from 'src/app/components/shared/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/shared/contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';





@NgModule({
  declarations: [FooterComponent,HeaderComponent,AboutUsComponent,ContactUsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    SharedRoutingModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule
  ],
  exports:[FooterComponent,HeaderComponent,AboutUsComponent,ContactUsComponent]
})
export class SharedModule { }

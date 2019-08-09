import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { ChartsComponent } from './components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MultiselectDropdownComponent,
    CreateUserComponent,
    AssignRoleComponent,
    ChartsComponent,
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

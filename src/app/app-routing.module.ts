import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import{ChartsComponent} from './components/charts/charts.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: 'assignrole', component: AssignRoleComponent },
   {path: 'evaluateChart', component: ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
DashboardComponent

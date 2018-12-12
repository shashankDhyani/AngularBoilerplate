import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: LoginComponent
    },
    {
      path: 'forgetpassword', component: ForgotPasswordComponent
    },
    {
      path: 'dashboard', component: DashboardComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class FeatureModule { }

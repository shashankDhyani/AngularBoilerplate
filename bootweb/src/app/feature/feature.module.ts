import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: LoginComponent
    },
    {
      path: 'forgetpassword', component: ForgotPasswordComponent
    }])
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class FeatureModule { }

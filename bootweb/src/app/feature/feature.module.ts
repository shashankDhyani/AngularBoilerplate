import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{
      path:'',component:LoginComponent
    }])
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class FeatureModule { }

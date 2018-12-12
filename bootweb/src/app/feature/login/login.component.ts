import { Component, OnInit } from '@angular/core';
import { userModel } from '../../shared/Models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { 
    this.User = new userModel();
  }
  showPassword:boolean;
  User:userModel;

  ngOnInit() {
  }

  togglePasswordVisibility(){
    this.showPassword = ! this.showPassword;
  }

  logIn() {
    // call loginService from here...

    //then naviagate to dashboard
    this.router.navigate(['/dashboard']);
  }

  ForgotPassword(){
   this.router.navigate(['/forgetpassword']);
  }

}

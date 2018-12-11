import { Component, OnInit } from '@angular/core';
import { userModel } from '../../shared/Models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
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
    console.log(this.User);
  }
}

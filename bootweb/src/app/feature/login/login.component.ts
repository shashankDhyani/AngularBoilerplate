import { Component, OnInit } from '@angular/core';
import { userModel } from '../../shared/Models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  showPassword:boolean;

  ngOnInit() {
  }

  togglePasswordVisibility(){
    this.showPassword = ! this.showPassword;
  }

  logIn(user:userModel) {

  }
}

import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/shared/Models/UserModel';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() {
    this.User = new userModel();
  }

  User: userModel;

  ngOnInit() {
  }
}

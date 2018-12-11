import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { userModel } from 'src/app/shared/Models/UserModel';
import 'rxjs/operators'
import { map } from 'rxjs/operators';
@Injectable()
class LoginService {
    constructor(private http: HttpClient){

    }

    BaseUrl = 'http://localhost/api/user/login';

    Login(user: userModel){
       return this.http.post(this.BaseUrl,user).pipe(
           map((response)=>(user = response.json()))
       ).subscribe();
    }
}
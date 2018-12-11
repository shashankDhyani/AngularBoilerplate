import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
class LoginService {
    constructor(private http: HttpClient){
        
    }
}
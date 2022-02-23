import { HttpClient, HttpClientModule } from '@angular/common/http' 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private _urlLogin = 'http://localhost:9000/login/do_login';
  
  constructor(private http: HttpClient) { }

  loginUser(user: any){
    return this.http.post(this._urlLogin, user);
  }

}

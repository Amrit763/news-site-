import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:any;
  constructor(
    public http:HttpClient
  ){
    this.url=environment.Base_URL;
  }
  getOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }
  register(data:any){
    return this.http.post(this.url+'auth/register',data,this.getOptions())
  }
  login(data:any){
    return this.http.post(this.url+'auth/login',data,this.getOptions())
  }
}

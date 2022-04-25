import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
 url:any;
  constructor(public http:HttpClient){
    this.url=environment.Base_URL+'user';
  }
  getOptions() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token':localStorage.getItem('token')!
        })
    }
  }
  deleteUserSer(user:any){
    console.log('dlt id>>>',user._id)
    return this.http.delete(this.url+'/'+user._id,this.getOptions())
  }
  getAllUSer(){
    return this.http.get(`${this.url}`,this.getOptions())
  }
}
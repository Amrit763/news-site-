import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }

  // url:any;
  // constructor(
  //   public http:HttpClient
  // ) { 
  //   this.url=environment.Base_URL;
  // }
  // getOptions() {
  //   return {
  //       headers: new HttpHeaders({
  //           'Content-Type': 'application/json'
  //       })
  //   }
  // }

  // register(data:any){
  //   return this.http.post(this.url+'auth/register',data,this.getOptions());
  // }
  // login(data:any){
  //   return this.http.post(this.url+'auth/login',data,this.getOptions())
  // }
  // customerData(){
  //   return this.http.get(this.url+'user',this.getOptions())
  // }
}

import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { AuthService } from '../../auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
 
  registerForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      name: new FormControl(''),
      username: new FormControl(''),
      phoneNumber: new FormControl(''),

})
  constructor(
    private router:Router,
    public authService:AuthService,
    public msgService:MsgServiceService
  ){}
  ngOnInit(): void {
  }
  register(){
    this.user=this.registerForm.value;
    console.log('here register value>>',this.user);
    this.authService.register(this.user)
      .subscribe(
        (data)=>{
          this.msgService.showSuccess('Register sucessfully')
          console.log('here data is >>',data)
          this.router.navigate(['/auth/login'])
        }
      ),
      (err:any)=>{
        this.msgService.showError(err.error.message)
        console.log('here err',err)
      }
  }

  get registerFormControl(){
    return this.registerForm.controls;
    }


}

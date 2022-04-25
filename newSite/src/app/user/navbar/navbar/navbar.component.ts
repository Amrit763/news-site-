import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // loginForm= new FormGroup({
  //   username: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required])
  // })
  //   constructor(
  //     public router:Router
  //   ) { }
  
  //   ngOnInit(): void {
  //   }
  // login(){
  //   this.router.navigate(['/user/register'])
  // }

  // get loginFormControl(){
  //   return this.loginForm.controls;
  //   }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  isLoading:boolean = false;
  errmsg !:string;

  loginForm:FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,Validators.required,),
  })
  submitlogin(){this.isLoading = true;
    if(this.loginForm.valid){
      //connect api
      this._AuthService.signIn(this.loginForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false;
          localStorage.setItem("userToken",res.token);
          this._AuthService.deCodeUserData();
          this._Router.navigate(["/Home"]);

        },
        error:(err) => {

          this.isLoading = false;
          this.errmsg = err.error.message;
        }
      });
    }
  }
}

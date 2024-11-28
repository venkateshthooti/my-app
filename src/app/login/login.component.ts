import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';
  // errorMessage = '';

  public loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl()
    }
  )

  constructor(private router: Router,private _loginService:LoginService) {

  }
  ngOnInit(): void {

  }
  // loginValidation() {
  //   console.log(this.email,this.password)
  //   if (this.email === 'venkatesh.bi2108@gmail.com' && this.password === '123456') {
  //     alert("login successfull")
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.errorMessage = 'Invalid username or password';
  //   }
  // }
  login(){
    console.log(this.loginForm)

    this._loginService.loginService(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login succesfully")
        // this.router.navigate(['/dashboard']);
        this.router.navigateByUrl('/dashboard');
        sessionStorage.setItem('token',data.token);
        
      },
      (err:any)=>{
        alert("invalid credential")
      }
    )
  }
}

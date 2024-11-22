import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }
  loginValidation() {
    console.log(this.email,this.password)
    if (this.email === 'venkatesh.bi2108@gmail.com' && this.password === '123456') {
      alert("login successfull")
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

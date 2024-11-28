import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private _router: Router) {}

  logOutComponent() {


      if (confirm("Are you sure you want to logout")){
            //go to login
    this._router.navigateByUrl('/login');
    // delete token
    sessionStorage.removeItem('token')

      }
      alert("are you sure")
    }
  }


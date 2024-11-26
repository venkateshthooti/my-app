import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  logOutComponent(){

    if (confirm("Are you sure you want to logout")){

    }
    alert("are you sure")
  }

}

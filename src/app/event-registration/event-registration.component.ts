import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
username:string='';
usernames:string[]=[];

register(){
  this.usernames.push(this.username)
}


}


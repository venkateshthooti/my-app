import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:User={name:'a',age:20,
    address:{
      city:'hyd',
      pin:303003
    },
    phones:[98754469,6789]
  }


}

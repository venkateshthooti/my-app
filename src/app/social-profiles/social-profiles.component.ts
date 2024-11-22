import { Component } from '@angular/core';
import { SocialProfilesService } from '../social-profiles.service';

@Component({
  selector: 'app-social-profiles',
  templateUrl: './social-profiles.component.html',
  styleUrls: ['./social-profiles.component.css']
})
export class SocialProfilesComponent {

  profiles:any=[]


  constructor(private _socialProfilesService:SocialProfilesService){

    _socialProfilesService.getSocialProfiles().subscribe(

      (data:any)=>{
        this.profiles=data;
      },
      (err:any)=>{
        alert("Internal server issue");
      }
    )
  }

}

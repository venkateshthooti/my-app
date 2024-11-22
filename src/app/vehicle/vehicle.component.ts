import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any=[];
  term:string="";

  coulumnName:string="";
  order:string="";

  limit:number=0;
  pageNumber:number=0;

  constructor(private _vehiclesevice:VehicleService){
    _vehiclesevice.getVehicles().subscribe(

      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  
  }
  filter(){
     this._vehiclesevice.getFilteredVehiclesService(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (err:any)=>{
        alert("Internal server error")
      }
     )
    }
    sorting(){
      this._vehiclesevice.getSortedVehiclesService(this.coulumnName,this.order).subscribe(
        (data:any)=>{
          this.vehicles=data
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }
    delete(id:string){
      this._vehiclesevice.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Deleted succcessful...!!")
          location.reload();
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )

    }
    pagination(){
      this._vehiclesevice.getPagevehicles(this.limit,this.pageNumber).subscribe(
        (data:any)=>{
         this.vehicles=data;
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }




}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  id:string="";
  constructor( private _vehicleService:VehicleService, _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data)
        this.id=data.id

        _vehicleService.getPerticularVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data)
          }
        )

      }
      
    )
  }

  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl()

    }

  );

  submit(){
    console.log(this.vehicleForm)
  if(this.id){
    this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data)
        alert("Updated successfully")
      },
      (err:any)=>{
        alert("Updation failed")
      }
    )

  }else{
    this._vehicleService.createVehicleService(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully....!")
      },
      (err:any)=>{
        alert("Creation failed")
      }
    )

  }
  }




  

}

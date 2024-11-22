import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // var age=20;  type should be mentioned in typescript
  age:number=20;
  name:string='Abc';
  isIndian:boolean=true;

  isInvalid:boolean=false;

  phone:string="+91"


  num1:number=0;
  num2:number=0
  result:number=0

  create(){
    alert("Created successfully!!!")
  }
  typing(){
    alert("typing")
  }



  sum(){
    this.result=this.num1+this.num2;
  }

}

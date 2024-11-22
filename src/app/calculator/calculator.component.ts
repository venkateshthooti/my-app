import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  number1:number=0;
  number2:number=0;
  result:number=0;

  sum(){
    this.result=this.number1+this.number2;
    
  }
  sub(){
    this.result=this.number1-this.number2;
    
  }
  mul(){
    this.result=this.number1*this.number2;
    
  }
  div(){
    this.result=this.number1/this.number2;
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() a:number=0

 @Input() max:number=0
 text:string=''

 @Output() bEvent:EventEmitter<number>=new EventEmitter();

 send(){
  this.bEvent.emit(20)
 }

//  liveChars(){
//   if(this.text.length>this.max){


//   }

 //}


}

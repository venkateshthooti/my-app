import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
empName:string="";
empRole:string="";

employees:any=[]

empAdding(){
  let employee={
    name:this.empName,
    role:this.empRole
  }
  this.employees.push(employee)
}

}

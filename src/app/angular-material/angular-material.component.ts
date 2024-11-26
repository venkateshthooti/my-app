import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { AmazonComponent } from '../amazon/amazon.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import {ThemePalette} from '@angular/material/core';
import { retry } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AccountsComponent } from '../accounts/accounts.component';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {

  panelOpenState = false;

  constructor(private _bottomSheet: MatBottomSheet,public dialog: MatDialog) {

  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
   
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;

  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed)); 
  }


  // chips
 

  //dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(BottomSheetComponent, {
      width:'500px',
      height:'500px',
      disableClose:true,
      data: {name: 'venkatesh', animal: 'cat'},
    });

    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });


  }

  // Table

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource : PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {

  constructor(
    public dialogRef: MatDialogRef<BottomSheetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClcik():void{
    this.dialogRef.close(12345);
  }

}

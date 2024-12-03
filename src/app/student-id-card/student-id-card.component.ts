import { Component } from '@angular/core';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.component.html',
  styleUrls: ['./student-id-card.component.css'],
})
export class StudentIdCardComponent {
  students: any = [];

  searchWord: string = '';

  coulumnName: string = '';
  order: string = '';

  limit:number=0;
  pageNumber:number=0;


  constructor(private _studentIdCardService: StudentIdCardService) {
    _studentIdCardService.getAllstudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internet server error');
      }
    );
  }
  filterComponent() {
    this._studentIdCardService
      .getFilteredStudentIdCards(this.searchWord)
      .subscribe(
        (data: any) => {
          this.students = data;
        },
        (err: any) => {
          alert('Internet server issue');
        }
      );
  }
  sortedComponent() {
    this._studentIdCardService
      .getSortedStudentIdcards(this.coulumnName, this.order)
      .subscribe(
        (data: any) => {
          this.students = data;
        },
        (err: any) => {
          alert('Internet server error');
        }
      );
  }

  deleteComponent(id: number) {
    console.log("delete enter")
    if (confirm('Are you sure you want to delete')) {
      this._studentIdCardService.deleteService(id).subscribe(
        (data: any) => {
          alert('Deleted Successfully...!');
          location.reload()
        },
        (error: any) => {
          alert('Deletion failed...??');
        }
      );
    }
  }

  paginationComponent(){
    this._studentIdCardService.paginationService(this.limit,this.pageNumber).subscribe(
      (data:any)=>{
        this.students=data;
      },(err:any)=>{
        alert("pagination failed..!")
      }
    )
  }

}

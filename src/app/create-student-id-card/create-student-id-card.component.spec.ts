import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentIdCardComponent } from './create-student-id-card.component';

describe('CreateStudentIdCardComponent', () => {
  let component: CreateStudentIdCardComponent;
  let fixture: ComponentFixture<CreateStudentIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentIdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

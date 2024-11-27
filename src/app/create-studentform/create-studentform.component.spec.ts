import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentformComponent } from './create-studentform.component';

describe('CreateStudentformComponent', () => {
  let component: CreateStudentformComponent;
  let fixture: ComponentFixture<CreateStudentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

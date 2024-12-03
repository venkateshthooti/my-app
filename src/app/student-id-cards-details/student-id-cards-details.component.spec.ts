import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdCardsDetailsComponent } from './student-id-cards-details.component';

describe('StudentIdCardsDetailsComponent', () => {
  let component: StudentIdCardsDetailsComponent;
  let fixture: ComponentFixture<StudentIdCardsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdCardsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdCardsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

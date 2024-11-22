import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteAccountsComponent } from './craete-accounts.component';

describe('CraeteAccountsComponent', () => {
  let component: CraeteAccountsComponent;
  let fixture: ComponentFixture<CraeteAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraeteAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmployeeComponent } from './change-employee.component';

describe('ChangeEmployeeComponent', () => {
  let component: ChangeEmployeeComponent;
  let fixture: ComponentFixture<ChangeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

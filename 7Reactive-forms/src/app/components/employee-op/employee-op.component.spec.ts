import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOpComponent } from './employee-op.component';

describe('EmployeeOpComponent', () => {
  let component: EmployeeOpComponent;
  let fixture: ComponentFixture<EmployeeOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOpRfValidationsComponent } from './emp-op-rf-validations.component';

describe('EmpOpRfValidationsComponent', () => {
  let component: EmpOpRfValidationsComponent;
  let fixture: ComponentFixture<EmpOpRfValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpOpRfValidationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpOpRfValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

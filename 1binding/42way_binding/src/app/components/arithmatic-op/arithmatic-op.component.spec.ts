import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmaticOpComponent } from './arithmatic-op.component';

describe('ArithmaticOpComponent', () => {
  let component: ArithmaticOpComponent;
  let fixture: ComponentFixture<ArithmaticOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmaticOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArithmaticOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

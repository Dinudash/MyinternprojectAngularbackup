import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAppComponent } from './todos-app.component';

describe('TodosAppComponent', () => {
  let component: TodosAppComponent;
  let fixture: ComponentFixture<TodosAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

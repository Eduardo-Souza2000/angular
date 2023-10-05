import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlivroComponent } from './editarlivro.component';

describe('EditarlivroComponent', () => {
  let component: EditarlivroComponent;
  let fixture: ComponentFixture<EditarlivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarlivroComponent]
    });
    fixture = TestBed.createComponent(EditarlivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

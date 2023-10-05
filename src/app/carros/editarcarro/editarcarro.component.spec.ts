import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcarroComponent } from './editarcarro.component';

describe('EditarcarroComponent', () => {
  let component: EditarcarroComponent;
  let fixture: ComponentFixture<EditarcarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarcarroComponent]
    });
    fixture = TestBed.createComponent(EditarcarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

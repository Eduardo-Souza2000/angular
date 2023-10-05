import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarlivroComponent } from './adicionarlivro.component';

describe('AdicionarlivroComponent', () => {
  let component: AdicionarlivroComponent;
  let fixture: ComponentFixture<AdicionarlivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarlivroComponent]
    });
    fixture = TestBed.createComponent(AdicionarlivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

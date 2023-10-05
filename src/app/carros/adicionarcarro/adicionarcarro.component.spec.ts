import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarcarroComponent } from './adicionarcarro.component';

describe('AdicionarcarroComponent', () => {
  let component: AdicionarcarroComponent;
  let fixture: ComponentFixture<AdicionarcarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarcarroComponent]
    });
    fixture = TestBed.createComponent(AdicionarcarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

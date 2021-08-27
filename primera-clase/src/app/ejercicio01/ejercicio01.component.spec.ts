import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio01Component } from './ejercicio01.component';

describe('Ejercicio01Component', () => {
  let component: Ejercicio01Component;
  let fixture: ComponentFixture<Ejercicio01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

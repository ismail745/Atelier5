import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarburantForm } from './carburant-form';

describe('CarburantForm', () => {
  let component: CarburantForm;
  let fixture: ComponentFixture<CarburantForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarburantForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarburantForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

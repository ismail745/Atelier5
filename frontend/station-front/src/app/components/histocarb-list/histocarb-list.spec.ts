import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistocarbList } from './histocarb-list';

describe('HistocarbList', () => {
  let component: HistocarbList;
  let fixture: ComponentFixture<HistocarbList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistocarbList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistocarbList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

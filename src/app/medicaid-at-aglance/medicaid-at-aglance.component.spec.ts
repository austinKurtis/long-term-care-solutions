import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaidAtAglanceComponent } from './medicaid-at-aglance.component';

describe('MedicaidAtAglanceComponent', () => {
  let component: MedicaidAtAglanceComponent;
  let fixture: ComponentFixture<MedicaidAtAglanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicaidAtAglanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaidAtAglanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

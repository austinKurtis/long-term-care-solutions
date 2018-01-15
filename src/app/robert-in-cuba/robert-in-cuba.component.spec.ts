import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertInCubaComponent } from './robert-in-cuba.component';

describe('RobertInCubaComponent', () => {
  let component: RobertInCubaComponent;
  let fixture: ComponentFixture<RobertInCubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobertInCubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertInCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

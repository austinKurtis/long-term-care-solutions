import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyingTestsComponent } from './qualifying-tests.component';

describe('QualifyingTestsComponent', () => {
  let component: QualifyingTestsComponent;
  let fixture: ComponentFixture<QualifyingTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifyingTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifyingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

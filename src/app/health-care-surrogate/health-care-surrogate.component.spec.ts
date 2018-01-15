import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareSurrogateComponent } from './health-care-surrogate.component';

describe('HealthCareSurrogateComponent', () => {
  let component: HealthCareSurrogateComponent;
  let fixture: ComponentFixture<HealthCareSurrogateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCareSurrogateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCareSurrogateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

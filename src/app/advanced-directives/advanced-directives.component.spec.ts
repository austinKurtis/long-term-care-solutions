import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDirectivesComponent } from './advanced-directives.component';

describe('AdvancedDirectivesComponent', () => {
  let component: AdvancedDirectivesComponent;
  let fixture: ComponentFixture<AdvancedDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

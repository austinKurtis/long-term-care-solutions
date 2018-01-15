import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertInNicaraguaComponent } from './robert-in-nicaragua.component';

describe('RobertInNicaraguaComponent', () => {
  let component: RobertInNicaraguaComponent;
  let fixture: ComponentFixture<RobertInNicaraguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobertInNicaraguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertInNicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

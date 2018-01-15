import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agua4NicaraguaComponent } from './agua4-nicaragua.component';

describe('Agua4NicaraguaComponent', () => {
  let component: Agua4NicaraguaComponent;
  let fixture: ComponentFixture<Agua4NicaraguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agua4NicaraguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agua4NicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncripcionEncuentroComponent } from './incripcion-encuentro.component';

describe('IncripcionEncuentroComponent', () => {
  let component: IncripcionEncuentroComponent;
  let fixture: ComponentFixture<IncripcionEncuentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncripcionEncuentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncripcionEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaFormacionComponent } from './jornada-formacion.component';

describe('JornadaFormacionComponent', () => {
  let component: JornadaFormacionComponent;
  let fixture: ComponentFixture<JornadaFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

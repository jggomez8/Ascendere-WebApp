import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaJornadaComponent } from './ultima-jornada.component';

describe('UltimaJornadaComponent', () => {
  let component: UltimaJornadaComponent;
  let fixture: ComponentFixture<UltimaJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimaJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimaJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

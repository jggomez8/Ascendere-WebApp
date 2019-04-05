import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarJornadaComponent } from './valorar-jornada.component';

describe('ValorarJornadaComponent', () => {
  let component: ValorarJornadaComponent;
  let fixture: ComponentFixture<ValorarJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorarJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

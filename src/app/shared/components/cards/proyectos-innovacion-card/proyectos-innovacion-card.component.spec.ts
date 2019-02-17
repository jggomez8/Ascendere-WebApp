import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosInnovacionCardComponent } from './proyectos-innovacion-card.component';

describe('ProyectosInnovacionCardComponent', () => {
  let component: ProyectosInnovacionCardComponent;
  let fixture: ComponentFixture<ProyectosInnovacionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosInnovacionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosInnovacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

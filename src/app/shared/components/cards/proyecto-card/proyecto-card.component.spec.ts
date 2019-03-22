import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoCardComponent } from './proyecto-card.component';

describe('ProyectosInnovacionCardComponent', () => {
  let component: ProyectoCardComponent;
  let fixture: ComponentFixture<ProyectoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

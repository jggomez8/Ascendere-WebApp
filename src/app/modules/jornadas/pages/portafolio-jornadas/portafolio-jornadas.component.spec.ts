import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioJornadasComponent } from './portafolio-jornadas.component';

describe('PortafolioJornadasComponent', () => {
  let component: PortafolioJornadasComponent;
  let fixture: ComponentFixture<PortafolioJornadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioJornadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioJornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

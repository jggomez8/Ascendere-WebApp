import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAsignaturaComponent } from './desarrollo-asignatura.component';

describe('DesarrolloAsignaturaComponent', () => {
  let component: DesarrolloAsignaturaComponent;
  let fixture: ComponentFixture<DesarrolloAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

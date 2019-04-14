import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosInnovacionAdminComponent } from './proyectos-innovacion-admin.component';

describe('ProyectosInnovacionAdminComponent', () => {
  let component: ProyectosInnovacionAdminComponent;
  let fixture: ComponentFixture<ProyectosInnovacionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosInnovacionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosInnovacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

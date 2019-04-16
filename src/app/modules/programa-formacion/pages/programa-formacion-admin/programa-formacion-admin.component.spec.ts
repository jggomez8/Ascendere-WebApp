import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaFormacionAdminComponent } from './programa-formacion-admin.component';

describe('ProgramaFormacionAdminComponent', () => {
  let component: ProgramaFormacionAdminComponent;
  let fixture: ComponentFixture<ProgramaFormacionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaFormacionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaFormacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresAcademicosComponent } from './talleres-academicos.component';

describe('TalleresAcademicosComponent', () => {
  let component: TalleresAcademicosComponent;
  let fixture: ComponentFixture<TalleresAcademicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalleresAcademicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

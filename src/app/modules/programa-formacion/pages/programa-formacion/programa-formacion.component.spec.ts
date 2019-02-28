import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaFormacionComponent } from './programa-formacion.component';

describe('ProgramaFormacionComponent', () => {
  let component: ProgramaFormacionComponent;
  let fixture: ComponentFixture<ProgramaFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

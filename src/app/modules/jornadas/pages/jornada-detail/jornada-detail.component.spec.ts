import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaDetailComponent } from './jornada-detail.component';

describe('JornadaDetailComponent', () => {
  let component: JornadaDetailComponent;
  let fixture: ComponentFixture<JornadaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

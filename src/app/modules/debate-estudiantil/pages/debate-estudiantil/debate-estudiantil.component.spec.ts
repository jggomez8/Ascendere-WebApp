import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateEstudiantilComponent } from './debate-estudiantil.component';

describe('DebateEstudiantilComponent', () => {
  let component: DebateEstudiantilComponent;
  let fixture: ComponentFixture<DebateEstudiantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateEstudiantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateEstudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

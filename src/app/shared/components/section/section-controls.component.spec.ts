import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionControlsComponent } from './section-controls.component';

describe('SectionControlsComponent', () => {
  let component: SectionControlsComponent;
  let fixture: ComponentFixture<SectionControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

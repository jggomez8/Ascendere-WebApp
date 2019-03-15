import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopFabComponent } from './go-top-fab.component';

describe('GoTopFabComponent', () => {
  let component: GoTopFabComponent;
  let fixture: ComponentFixture<GoTopFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTopFabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTopFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

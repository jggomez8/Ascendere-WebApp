import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnFabComponent } from './return-fab.component';

describe('ReturnFabComponent', () => {
  let component: ReturnFabComponent;
  let fixture: ComponentFixture<ReturnFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

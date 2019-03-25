import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaTipCardComponent } from './innova-tip-card.component';

describe('InnovaTipCardComponent', () => {
  let component: InnovaTipCardComponent;
  let fixture: ComponentFixture<InnovaTipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovaTipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovaTipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

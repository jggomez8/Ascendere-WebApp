import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaTipsComponent } from './innova-tips.component';

describe('InnovaTipsComponent', () => {
  let component: InnovaTipsComponent;
  let fixture: ComponentFixture<InnovaTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovaTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovaTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

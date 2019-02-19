import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTransitionComponent, LazyLoadImage } from './lazy-load.component';

describe('LazyTransitionComponent', () => {
  let component: LazyTransitionComponent;
  let fixture: ComponentFixture<LazyTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('LazyImageComponent', () => {
  let component: LazyLoadImage;
  let fixture: ComponentFixture<LazyLoadImage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadImage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

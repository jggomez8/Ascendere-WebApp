import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesScrollComponent } from './features-scroll.component';

describe('FeaturesScrollComponent', () => {
  let component: FeaturesScrollComponent;
  let fixture: ComponentFixture<FeaturesScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

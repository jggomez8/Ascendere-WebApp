import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroVideoComponent } from './home-hero-video.component';

describe('HomeHeroVideoComponent', () => {
  let component: HomeHeroVideoComponent;
  let fixture: ComponentFixture<HomeHeroVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeroVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeroVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEncuentroComponent } from './hero-encuentro.component';

describe('HeroEncuentroComponent', () => {
  let component: HeroEncuentroComponent;
  let fixture: ComponentFixture<HeroEncuentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroEncuentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

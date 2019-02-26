import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRouteItemComponent } from './navbar-route-item.component';

describe('NavbarRouteItemComponent', () => {
  let component: NavbarRouteItemComponent;
  let fixture: ComponentFixture<NavbarRouteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRouteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRouteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

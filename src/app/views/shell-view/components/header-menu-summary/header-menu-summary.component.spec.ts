import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuSummaryComponent } from './header-menu-summary.component';

describe('HeaderMenuSummaryComponent', () => {
  let component: HeaderMenuSummaryComponent;
  let fixture: ComponentFixture<HeaderMenuSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

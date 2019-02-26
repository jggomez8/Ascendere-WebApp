import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMenuSummaryComponent } from './section-menu-summary.component';

describe('SectionMenuSummaryComponent', () => {
  let component: SectionMenuSummaryComponent;
  let fixture: ComponentFixture<SectionMenuSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMenuSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMenuSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMenuHeaderComponent } from './section-menu-header.component';

describe('SectionMenuHeaderComponent', () => {
  let component: SectionMenuHeaderComponent;
  let fixture: ComponentFixture<SectionMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

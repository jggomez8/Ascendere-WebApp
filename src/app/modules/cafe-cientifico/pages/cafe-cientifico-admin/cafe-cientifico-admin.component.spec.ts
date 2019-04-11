import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCientificoAdminComponent } from './cafe-cientifico-admin.component';

describe('CafeCientificoAdminComponent', () => {
  let component: CafeCientificoAdminComponent;
  let fixture: ComponentFixture<CafeCientificoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeCientificoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCientificoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

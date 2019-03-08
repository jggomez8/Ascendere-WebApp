import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCientificoComponent } from './cafe-cientifico.component';

describe('CafeCientificoComponent', () => {
  let component: CafeCientificoComponent;
  let fixture: ComponentFixture<CafeCientificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeCientificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCientificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

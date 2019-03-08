import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminaIComponent } from './vitamina-i.component';

describe('VitaminaIComponent', () => {
  let component: VitaminaIComponent;
  let fixture: ComponentFixture<VitaminaIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaminaIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

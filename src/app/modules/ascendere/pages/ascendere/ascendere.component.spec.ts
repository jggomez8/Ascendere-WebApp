import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscendereComponent } from './ascendere.component';

describe('AscendereComponent', () => {
  let component: AscendereComponent;
  let fixture: ComponentFixture<AscendereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscendereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscendereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

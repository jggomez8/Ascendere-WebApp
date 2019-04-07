import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroComponent } from './encuentro.component';

describe('EncuentroComponent', () => {
  let component: EncuentroComponent;
  let fixture: ComponentFixture<EncuentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsInnovacionComponent } from './tips-innovacion.component';

describe('TipsInnovacionComponent', () => {
  let component: TipsInnovacionComponent;
  let fixture: ComponentFixture<TipsInnovacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsInnovacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsInnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInnovaTipComponent } from './create-innova-tip.component';

describe('CreateInnovaTipComponent', () => {
  let component: CreateInnovaTipComponent;
  let fixture: ComponentFixture<CreateInnovaTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInnovaTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInnovaTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

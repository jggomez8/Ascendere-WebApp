import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEncuentroComponent } from './create-encuentro.component';

describe('CreateEncuentroComponent', () => {
  let component: CreateEncuentroComponent;
  let fixture: ComponentFixture<CreateEncuentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEncuentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticuloComponent } from './create-articulo.component';

describe('CreateArticuloComponent', () => {
  let component: CreateArticuloComponent;
  let fixture: ComponentFixture<CreateArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

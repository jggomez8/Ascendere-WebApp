import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraEncuentrosComponent } from './cartelera-encuentros.component';

describe('CarteleraEncuentrosComponent', () => {
  let component: CarteleraEncuentrosComponent;
  let fixture: ComponentFixture<CarteleraEncuentrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteleraEncuentrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteleraEncuentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

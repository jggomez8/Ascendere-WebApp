import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCursosComponent } from './portfolio-cursos.component';

describe('PortfolioComponent', () => {
  let component: PortfolioCursosComponent;
  let fixture: ComponentFixture<PortfolioCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

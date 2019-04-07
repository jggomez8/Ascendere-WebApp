import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservatorioFeaturesComponent } from './observatorio-features.component';

describe('ObservatorioFeaturesComponent', () => {
  let component: ObservatorioFeaturesComponent;
  let fixture: ComponentFixture<ObservatorioFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservatorioFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservatorioFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

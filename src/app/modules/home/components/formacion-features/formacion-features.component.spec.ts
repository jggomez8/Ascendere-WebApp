import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormacionFeaturesComponent } from './formacion-features.component';

describe('FeaturesScrollComponent', () => {
  let component: FormacionFeaturesComponent;
  let fixture: ComponentFixture<FormacionFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormacionFeaturesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

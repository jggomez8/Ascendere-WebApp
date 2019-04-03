import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlobComponent } from './home-blob.component';

describe('HomeBlobComponent', () => {
  let component: HomeBlobComponent;
  let fixture: ComponentFixture<HomeBlobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

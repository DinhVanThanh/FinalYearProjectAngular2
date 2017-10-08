import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationInformationComponent } from './accommodation-information.component';

describe('AccommodationInformationComponent', () => {
  let component: AccommodationInformationComponent;
  let fixture: ComponentFixture<AccommodationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

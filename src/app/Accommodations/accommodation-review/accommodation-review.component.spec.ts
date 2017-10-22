import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationReviewComponent } from './accommodation-review.component';

describe('AccommodationReviewComponent', () => {
  let component: AccommodationReviewComponent;
  let fixture: ComponentFixture<AccommodationReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

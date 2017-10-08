import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationSearchListsComponent } from './accommodation-search-lists.component';

describe('AccommodationSearchListsComponent', () => {
  let component: AccommodationSearchListsComponent;
  let fixture: ComponentFixture<AccommodationSearchListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationSearchListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSearchListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

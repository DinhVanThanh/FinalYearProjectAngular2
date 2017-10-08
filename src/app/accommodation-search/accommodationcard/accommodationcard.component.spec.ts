import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationcardComponent } from './accommodationcard.component';

describe('AccommodationcardComponent', () => {
  let component: AccommodationcardComponent;
  let fixture: ComponentFixture<AccommodationcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

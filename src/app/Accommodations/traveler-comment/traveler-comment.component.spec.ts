import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerCommentComponent } from './traveler-comment.component';

describe('TravelerCommentComponent', () => {
  let component: TravelerCommentComponent;
  let fixture: ComponentFixture<TravelerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

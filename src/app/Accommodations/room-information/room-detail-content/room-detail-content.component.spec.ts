import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailContentComponent } from './room-detail-content.component';

describe('RoomDetailContentComponent', () => {
  let component: RoomDetailContentComponent;
  let fixture: ComponentFixture<RoomDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

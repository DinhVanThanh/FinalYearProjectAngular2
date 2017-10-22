import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationImagesComponent } from './accommodation-images/accommodation-images.component';
import { AccommodationInformationComponent } from './accommodation-information/accommodation-information.component';
import { RoomInformationComponent } from './room-information/room-information.component';
import { RoomDetailContentComponent } from './room-information/room-detail-content/room-detail-content.component';
import { TravelerCommentComponent } from './traveler-comment/traveler-comment.component';
import { AccommodationReviewComponent } from './accommodation-review/accommodation-review.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule, NgxPaginationModule
  ],
  declarations: [AccommodationImagesComponent, AccommodationInformationComponent, RoomInformationComponent, RoomDetailContentComponent, TravelerCommentComponent, AccommodationReviewComponent],
  exports : [AccommodationInformationComponent]
})
export class AccommodationDetailsModule { }

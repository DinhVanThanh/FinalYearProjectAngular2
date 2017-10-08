import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationImagesComponent } from './accommodation-images/accommodation-images.component';
import { AccommodationInformationComponent } from './accommodation-information/accommodation-information.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccommodationImagesComponent, AccommodationInformationComponent],
  exports : [AccommodationInformationComponent]
})
export class AccommodationDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Templates/sidebar/sidebar.component';
import {AccommodationcardComponent} from './accommodationcard/accommodationcard.component';
import { AccommodationSearchListsComponent } from './accommodation-search-lists/accommodation-search-lists.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccommodationcardComponent, AccommodationSearchListsComponent, SidebarComponent],
  exports : [AccommodationSearchListsComponent]
})
export class AccommodationSearchModule { }

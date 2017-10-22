import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SearchbarComponent } from './Templates/searchbar/searchbar.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { ContentComponent } from './Templates/content/content.component';

import { AccommodationDetailsModule } from './Accommodations/accommodation-details.module';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';

import{ HttpWebApiService } from './services/Http/http-web-api.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    SearchbarComponent, 
    ContentComponent 
  ],
  imports: [
    BrowserModule ,BrowserAnimationsModule, NgbModule.forRoot(), AccommodationDetailsModule, 
    AccommodationSearchModule, HttpClientModule 
  ],
  providers: [
    HttpWebApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-accommodationcard',
  templateUrl: './accommodationcard.component.html',
  styleUrls: ['./accommodationcard.component.scss']
})
export class AccommodationcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( ".image-accommodation-avatar" ).mouseenter(function() {
       $('.dark-overlay-information').css('display', 'block');
       
    }).mouseleave(function(){
      $('.dark-overlay-information').css('display', 'none');
    });
  }

}

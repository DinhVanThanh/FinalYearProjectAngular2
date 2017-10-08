import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-accommodation-information',
  templateUrl: './accommodation-information.component.html',
  styleUrls: ['./accommodation-information.component.scss']
})
export class AccommodationInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.InitAccommodationRating();
    this.InitCarousel();
  }
  InitAccommodationRating()
  {
    $('[data-rating] .star').on('click', function() {
      var selectedCssClass = 'selected';
      var $this = $(this);
      $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
      $this
        .addClass(selectedCssClass)
        .parent().addClass('is-voted');
    });
  }
  InitCarousel()
  {
    $(document).ready(function(){ 
      $("#gallery").unitegallery({
        gallery_width:1200,							//gallery width		
        gallery_height:600
      }); 
    }); 
  }
}

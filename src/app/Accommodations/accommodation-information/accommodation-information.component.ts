import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-accommodation-information',
  templateUrl: './accommodation-information.component.html',
  styleUrls: ['./accommodation-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccommodationInformationComponent implements OnInit {

  @Input('data') meals: string[] = ["", "", ""];
  page: number = 1;

  constructor() { }

  ngOnInit() {
    this.InitAccommodationRating();
    this.InitCarousel();
    this.InitCircleReview();
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

  InitCircleReview()
  {
    $("[data-circle-graph]").each(function() {
      var $graph = $(this),
          percent = parseInt($graph.data('percent'), 10),
          deg = 360*percent/100;
      if(percent > 50) {
        $graph.addClass('gt-50');
      }
      $graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
      $graph.find('.circle-graph-percents-number').html(percent+'%');
    });     
  }
}

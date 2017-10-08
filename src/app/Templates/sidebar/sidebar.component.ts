import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.InitAccommodationRating();
   
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
 
}

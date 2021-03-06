import { Component, OnInit } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.InitDatetimePicker();
     this.InitInputNumberPerson();
    
  }
    InitDatetimePicker()
    {
          var nowTemp = new Date();
          var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
          
          var checkin = $('#input-datetimepicker-checkin').fdatepicker({
            initialDate: now,
            format: 'dd/mm/yyyy',
            onRender: function (date) {
              return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
          }).on('changeDate', function (ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
              var newDate = new Date(ev.date)
              newDate.setDate(newDate.getDate() + 1);
              checkout.update(newDate);
            }
            checkin.hide();
            $('#input-datetimepicker-checkout')[0].focus();
          }).data('datepicker');
          
          var checkout = $('#input-datetimepicker-checkout').fdatepicker({
            initialDate: now,
            format: 'dd/mm/yyyy',
            onRender: function (date) {
              return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            }
          }).on('changeDate', function (ev) {
            checkout.hide();
          }).data('datepicker');
    }

    InitInputNumberPerson()
    {
      $('.input-number-increment').click(function() {
        var $input = $('.input-number');
        var val = parseInt($input.text(), 10);
        $input.text(val + 1);
      });
      
      $('.input-number-decrement').click(function() {
        var $input = $('.input-number');
        var val = parseInt($input.text(), 10);
        if(val > 0)
          $input.text(val - 1);
        else
            $input.text(0);
      })
      
      
    }
}

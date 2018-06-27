import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

// $(document).ready(function () {
//   $('.nav-link').click(function(e) {

//       $('.nav-link').removeClass('active');

//       var $this = $(this);
//       if (!$this.hasClass('active')) {
//           $this.addClass('active');
//       }
//       //e.preventDefault();
//   });
// });
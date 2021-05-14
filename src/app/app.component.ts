import {
  Component
} from '@angular/core';
import $ from '../assets/js/vendor/jquery.js'

declare const sliders: any;
declare const scrollUp: any;
declare const magnificPopups: any;


 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'igrowth';
  ngOnInit() {
    
    scrollUp()
    // header sticky
    var sticky = $('.header-area')
    var windows = $(window);
    windows.on('scroll', function () {
      var scroll = windows.scrollTop();
      if (scroll < 400) {
        sticky.removeClass('stick');
      } else {
        sticky.addClass('stick');
      }
    });


    // Header Height For Hero Area Top Spac
    windows.on("resize", function () {
      var headerHight = $('.header-area').height();
      $('.hero-area, .page-banner-area').css('margin-top', headerHight + 'px ');
    }).resize();

    // search toggle
    // $('.search-toggle').on('click', function () {
    //   $('.header-search-form').toggleClass('active');
    // })

    // Bootstrap Menu Fix For Mobile
    $(document).on('click', '.navbar-collapse.in', function (e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide');
      }
    });

    sliders()
    magnificPopups()

  }
}

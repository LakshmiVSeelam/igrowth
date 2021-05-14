import {
  Component
} from '@angular/core';
import $ from '../assets/js/vendor/jquery.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'igrowth';
  ngOnInit() {

    // header sticky
    var sticky = $('.header-area')
    var windows = $(window);
    windows.on('scroll', function () {
      console.log('////')
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

    $('.feature-slider, .case-slider, .testimonial-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      responsive: [{
          breakpoint: 950,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });


    $('[data-scroll]').on('click', function (e) {
      e.preventDefault();
      var link = this;
      $.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: -90,
      });
    });
    /*--
      Scroll Up
    -----------------------------------*/
    $.scrollUp({
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade',
      scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    });


  }
}

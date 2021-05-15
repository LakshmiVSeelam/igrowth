import {
  Component
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import $ from '../assets/js/vendor/jquery.js'
import {NavigationEnd, Router} from '@angular/router';

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

  pagetitles = {
    '/' : 'Home | Igrowth',
    '/about' : 'About | Igrowth',
    '/services' : 'Services | Igrowth',
    '/contact' : 'Contact | Igrowth'
  }

  constructor(router: Router, private titleService:Title) {
    router.events.subscribe(val => {
      var headerHight = $('.header-area').height();
      $('.hero-area, .page-banner-area').css('margin-top', headerHight + 'px ');

      if(val instanceof NavigationEnd){
        this.titleService.setTitle(this.pagetitles[val.url]);
      }
    });

    
  }

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

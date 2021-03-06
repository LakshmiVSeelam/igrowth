import {
  Component
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import $ from '../assets/js/vendor/jquery.js'
import {NavigationEnd, Router} from '@angular/router';


declare const scrollUp: any;
declare const magnificPopups: any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Promotel';

  pagetitles = {
    '/' : 'Home | Promotel',
    '/about' : 'About | Promotel',
    '/services' : 'Services | Promotel',
    '/contact' : 'Contact | Promotel',
    '/portfolio' : 'Portfolio | Promotel',
    '/blog' : 'Blog | Promotel'
  }

  constructor(router: Router, private titleService:Title) {
    router.events.subscribe(val => {
      var headerHight = $('.header-area').height();
      $('.hero-area, .page-banner-area').css('margin-top', headerHight + 'px ');

      if(val instanceof NavigationEnd){
        this.titleService.setTitle(this.pagetitles[val.url]);
        window.scrollTo(0, 0)

        let styles = document.getElementsByTagName('style')
        Array.from(styles).forEach(function (element) {
          if(element.hasAttribute('data-id')){
            element.remove()
          }
        });
      }

      
    });

    
  }

  ngOnInit() {

    if(document.URL.indexOf('://www.')===-1){
        var base = document.getElementsByTagName('base')[0];
        base.href = base.href.replace('://www.','://');
    }
    

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

    // sliders()
    magnificPopups()

  }

  
}

import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'

@Component({
  selector: 'app-testimonialsection',
  templateUrl: './testimonialsection.component.html',
  styleUrls: ['./testimonialsection.component.css']
})
export class TestimonialsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Testimonial Slider
  $('.hero-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
  });
  }

}

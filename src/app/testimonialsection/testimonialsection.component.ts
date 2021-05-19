import { Component, OnInit } from '@angular/core';

declare const slickSlider: any;

@Component({
  selector: 'app-testimonialsection',
  templateUrl: './testimonialsection.component.html',
  styleUrls: ['./testimonialsection.component.css']
})
export class TestimonialsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Testimonial Slider
    slickSlider('.testimonial-slider')
  }

}

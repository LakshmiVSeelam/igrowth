import { Component, OnInit } from '@angular/core';

declare const sliders: any;

@Component({
  selector: 'app-testimonialsection',
  templateUrl: './testimonialsection.component.html',
  styleUrls: ['./testimonialsection.component.css']
})
export class TestimonialsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Testimonial Slider
    sliders()
  }

}

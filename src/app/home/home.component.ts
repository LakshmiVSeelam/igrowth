import { Component, OnInit } from '@angular/core';

declare var slickSlider : any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    slickSlider('.hero-slider')
  }

}

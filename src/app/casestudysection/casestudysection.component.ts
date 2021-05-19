import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'


declare const slickSlider: any;

@Component({
  selector: 'app-casestudysection',
  templateUrl: './casestudysection.component.html',
  styleUrls: ['./casestudysection.component.css']
})
export class CasestudysectionComponent{

  portfoliosections = [
    {"id": 1, "name": "Our creation"},
    {"id": 2, "name": "Website Designs"},
    {"id": 3, "name": "Graphic Designs"}
  ]
  constructor() { }

  ngOnInit(): void {
    // debugger
    setTimeout(function(){
      slickSlider('.case-slider')
    }, 1000)
    
  }

}

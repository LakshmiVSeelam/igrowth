import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  active_cat = 'all'
  categories = [
    {'id': 'all', 'name': 'Our Creations'},
    {'id': 'website', 'name': 'Website Designs'},
    {'id': 'graphic', 'name': 'Graphic Designs'}
  ]

  web_count = 0
  graphic_count = 5

  img_arr = []

  constructor() { 
    
  }

  ngOnInit(): void {
    [...Array(this.web_count).keys()].forEach(i => {
      if(i > 0){
        this.img_arr.push('website_' + i)
      }
    });
    [...Array(this.graphic_count).keys()].forEach(i => {
      if(i>0){
        this.img_arr.push('graphic_' + i)
      }
    });
  }

}

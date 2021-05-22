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
    {'id': 'c2', 'name': 'Website Designs'},
    {'id': 'c3', 'name': 'Graphic Designs'}
  ]
  img_arr = ['c2_1', 'c2_2', 'c2_3', 'c3_1', 'c3_2']

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

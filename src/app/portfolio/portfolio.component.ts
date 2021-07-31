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
    {'id': 'graphic', 'name': 'Graphic Designs'},
    {'id': 'videos', 'name': '3D Animation'}
  ]

  videos = []

  

  graphic_img_arr = []
  website_img_arr = []
  final_img_arr = []

  constructor() { 
    
  }

  ngOnInit(): void {
    var self = this
    let graphics_url = 'assets/data/graphic_img_data.json'
    let videos_url = 'assets/data/video_data.json'
    let website_url = 'assets/data/website_img_data.json'
    
    $.when(
        $.getJSON(graphics_url),
        $.getJSON(website_url),
        $.getJSON(videos_url)
    ).done(function(res1, res2, res3) {
      self.final_img_arr = res1[0].concat(res2[0])
      self.videos = res3[0]
    });
  }
}

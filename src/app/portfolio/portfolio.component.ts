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

  videos = [
    {"id": 1, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_200777VVbZNKN.mp4"},
    {"id": 2, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_2008962iaDukw.mp4"},
    {"id": 3, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_201159iGCxt0O.mp4"},
    {"id": 4, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_202202Bx9095M.mp4"},
    {"id": 5, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_201743lVgYjvR.mp4"},
    {"id": 6, "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_200663rILRAgO.mp4"}
  ]

  web_count = 20
  graphic_count = 20

  img_arr = []
  final_img_arr = []

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

    var self = this
    this.img_arr.forEach((img_name) => {
      $.get(`assets/img/portfolio/${img_name}.jpg`).done(function(){
        self.final_img_arr.push(img_name)
      })
    })
  }

  

}

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
    // {'id': 'all', 'name': 'Our Creations'},
    {'id': 'graphic', 'name': 'Graphic Designs'},
    {'id': 'videos', 'name': 'After Effects'},
    {'id': 'website', 'name': 'Clientele'}
    
    
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
    
    // $.when(
    //     $.getJSON(graphics_url),
    //     $.getJSON(website_url),
    //     $.getJSON(videos_url)
    // ).done(function(res1, res2, res3) {
    //   self.final_img_arr = res1[0].concat(res2[0])
    //   self.videos = res3[0]
    // });

    $.getJSON('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCYn6oNDCGVXfd9Mkg3umSSw&maxResults=25&key=AIzaSyAj8h3s8_Lphr0eo1rN80KYPjWZAbD9L0Q').done(res => {
      self.videos = res.items
      console.log(res)
    })
  }
}

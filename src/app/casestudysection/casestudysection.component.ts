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
    {"id": 1, "name": "Our creation", "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_200777VVbZNKN.mp4"},
    {"id": 2, "name": "Website Designs", "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_2008962iaDukw.mp4"},
    {"id": 3, "name": "Graphic Designs", "video_link": "https://ve3d.nyc3.digitaloceanspaces.com/usercontent/139668/videos/ved_201159iGCxt0O.mp4"}
  ]
  constructor() { }

  ngOnInit(): void {
    // debugger
    setTimeout(function(){
      slickSlider('.case-slider')
    }, 1000)
    
  }

}

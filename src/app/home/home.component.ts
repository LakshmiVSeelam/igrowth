import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'
import { DomSanitizer } from '@angular/platform-browser';

declare var slickSlider : any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dom:DomSanitizer) { 
    
  }

  slider_imgs = []

  ngOnInit(): void {
    var self = this
    $.getJSON('https://www.googleapis.com/drive/v3/files?q=%2712tGgQGAkPzjRb1mv3oPBlpRBqaGg2Xxb%27+in+parents&key=AIzaSyCBXe8STM0FlJjddUomYawcvMO7ZRk-YJ0').done(res => {
      self.slider_imgs = res.files
      self.slider_imgs.forEach(slider_img => {
        slider_img.url = this.dom.bypassSecurityTrustResourceUrl(`https://drive.google.com/uc?id=${slider_img.id}`)
      });
      // slickSlider('.hero-slider')
      setTimeout(function(){
        slickSlider('.hero-slider')
      }, 1000)
    })
    
    
  }

}

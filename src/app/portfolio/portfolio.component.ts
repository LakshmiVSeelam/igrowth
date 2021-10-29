import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // gapi : any;

  active_cat = 'graphic'
  categories = [
    // {'id': 'all', 'name': 'Our Creations'},
    {'id': 'graphic', 'name': 'Graphic Designs'},
    {'id': 'videos', 'name': 'After Effects'},
    {'id': 'clients', 'name': 'Clientele'}
    
    
  ]

  videos = []
  clients = []
  graphics = []

  constructor(private dom:DomSanitizer) { 
    
  }

  ngOnInit(): void {
    var self = this

    $.getJSON('https://www.googleapis.com/drive/v3/files?q=%271SIr1Jn7Bn9Fja2CYCO2hEm5Ux7GsTMEk%27+in+parents&key=AIzaSyCBXe8STM0FlJjddUomYawcvMO7ZRk-YJ0').done(res => {
      self.graphics = res.files
      self.graphics.forEach(graphic => {
        graphic.url = this.dom.bypassSecurityTrustResourceUrl(`https://drive.google.com/uc?id=${graphic.id}`)
      });
    })

    $.getJSON('https://www.googleapis.com/drive/v3/files?q=%271TPi_eopuexQnDTJS_qkkrVyjFQ-bZoCi%27+in+parents&key=AIzaSyCBXe8STM0FlJjddUomYawcvMO7ZRk-YJ0').done(res => {
      self.clients = res.files
      self.clients.forEach(client => {
        client.url = this.dom.bypassSecurityTrustResourceUrl(`https://drive.google.com/uc?id=${client.id}`)
      });
    })
    
    

    $.getJSON('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCYn6oNDCGVXfd9Mkg3umSSw&maxResults=25&key=AIzaSyAj8h3s8_Lphr0eo1rN80KYPjWZAbD9L0Q').done(res => {
      res.items.pop()
      self.videos = res.items
      self.videos.forEach(video => {
        video.url = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`)
      });
    })
  }
}

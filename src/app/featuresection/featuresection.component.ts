import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-featuresection',
  templateUrl: './featuresection.component.html',
  styleUrls: ['./featuresection.component.css']
})
export class FeaturesectionComponent implements OnInit {
  pagetitle = ''
  colors = ["#5ebed9", "#001854", "#eea11d", "#b42251"]
  features = [
    {"id": 1, "name": "SEO", "desc": "...", "img": "assets/img/feature/seo_bg.png", "bg_img": "assets/img/feature/seo.png", "bg_class": "green"},
    {"id": 2, "name": "SEM", "desc": "...", "img": "assets/img/feature/sem_bg.png", "bg_img": "assets/img/feature/sem.png", "bg_class": "red"},
    {"id": 3, "name": "Social Media Promotion", "desc": "...", "img": "assets/img/feature/smp_bg.png", "bg_img": "assets/img/feature/smp.png", "bg_class": "navy"},
    {"id": 4, "name": "Web Design and Development", "desc": "...", "img": "assets/img/feature/web_bg.png", "bg_img": "assets/img/feature/web.png", "bg_class": "red"},
    {"id": 5, "name": "Email Marketing", "desc": "...", "img": "assets/img/feature/email_bg.png", "bg_img": "assets/img/feature/email.png", "bg_class": "navy"},
    {"id": 6, "name": "Digital Consultation", "desc": "...", "img": "assets/img/feature/dc_bg.png", "bg_img": "assets/img/feature/dc.png", "bg_class": "green"},
    {"id": 7, "name": "Strategy and Growth", "desc": "...", "img": "assets/img/feature/stratergy_bg.png", "bg_img": "assets/img/feature/stratergy.png", "bg_class": "navy"},
    {"id": 8, "name": "Event Marketing", "desc": "...", "img": "assets/img/feature/event_bg.png", "bg_img": "assets/img/feature/event.png", "bg_class": "green"}
  ]
  constructor( private titleService:Title) { 
    
  }

  ngOnInit(): void {
    this.pagetitle = this.titleService.getTitle()
    this.features = this.pagetitle == 'Home | Igrowth' ? this.features.slice(1,4) : this.features
  }

}

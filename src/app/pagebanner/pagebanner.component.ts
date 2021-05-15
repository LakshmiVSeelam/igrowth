import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-pagebanner',
  templateUrl: './pagebanner.component.html',
  styleUrls: ['./pagebanner.component.css']
})
export class PagebannerComponent implements OnInit {
  pagetitle = ''
  pagetitles = {
    '/' : 'Home',
    '/about' : 'About',
    '/services' : 'Services',
    '/contact' : 'Contact'
  }
  constructor(router: Router,private titleService:Title) { 

    router.events.subscribe(val => {
      
      if(val instanceof NavigationEnd){
        this.pagetitle = this.pagetitles[val.url]
      }
    });
  }

  ngOnInit(): void {
  }

}

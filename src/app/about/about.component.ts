import { Component, OnInit } from '@angular/core';

// declare const sliders: any;
declare const scrollUp: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // sliders()
    scrollUp()
  }

}

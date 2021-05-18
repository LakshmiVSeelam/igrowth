import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nav_items = [
    {name: "Home", link : ""},
    {name: "About", link : "/about"},
    {name: "Services", link : "/services"},
    {name: "Our Portfolio", link : "/portfolio"},
    {name: "Blog", link : "/blog"},
    {name: "Contact", link : "/contact"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

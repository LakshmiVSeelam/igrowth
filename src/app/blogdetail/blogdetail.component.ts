import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  blogContent

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.render_blog(params.id)
    } );
  }

  render_blog(blog_id){
    var self = this
    let blog_data_url = `assets/data/blog${blog_id}.html`
    $.get(blog_data_url).done(function(res){
      var parser = new DOMParser();
	    var doc = parser.parseFromString(res, 'text/html');
      self.blogContent = doc.activeElement.innerHTML || 'HTML'
      var style_text = doc.getElementsByTagName('style')[0].innerHTML
      var css = document.createElement('style')
      css.setAttribute('data-id', 'blogStyles')
      document.getElementsByTagName("head")[0].appendChild(css);
      css.innerHTML = style_text
    })
  }

}

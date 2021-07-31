import { Component, OnInit } from '@angular/core';
import $ from '../../assets/js/vendor/jquery.js'


@Component({
  selector: 'app-blogsection',
  templateUrl: './blogsection.component.html',
  styleUrls: ['./blogsection.component.css']
})
export class BlogsectionComponent implements OnInit {

  blogs 

  constructor() { }

  ngOnInit(): void {
    this.render_blogs()
  }

  render_blogs(){
    var self = this
    $.get('../assets/data/blog_data.json').done(function(res){
      self.blogs = res
    })
  }

}
